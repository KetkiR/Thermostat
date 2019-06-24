var express = require('express');
var router = express.Router();
var thermostatDetails = require('../utils/thermostat');
var multer = require('multer');
var upload = multer({ dest: 'uploads/' });
var client = require('../utils/mongoConnection.js');
const fs = require('fs') ;
const util = require('util');
const readFile = util.promisify(fs.readFile);
const moment = require('moment');

router.post('/uploadedFile', upload.single('file'), async (req, res, next) => {
    try{
        updateThermostatData(req.file.path);
        res.status(200);
        res.send({message :"data uploaded successfully!"});
    } catch(ex) {
        res.status(400);
        res.send({message: "something went wrong"});
    }
    
});

let updateThermostatData = async (filePath) => {
    let data = await readFile(filePath);
    data = data.toString('utf8');
    data = JSON.parse(data);
    console.log("doing the processing",data.length);
    let clientConnection = await client.createMongoConnection();
    let i,j,temparray,chunk = 100000;
    const thermostatCollection = clientConnection.collection('thermostat');
    for (i=0,j=data.length; i<j; i+=chunk) {
        temparray = data.slice(i,i+chunk);
        let thermostatBulkInsert;
        for(let thermostat of temparray) {
            thermostatBulkInsert = thermostatCollection.initializeUnorderedBulkOp();
            
            thermostatBulkInsert.find({ts: thermostat.ts.toString()}).upsert().updateOne({
                $set : {value:thermostat.val,tsToDate: new Date(thermostat.ts)},
                $setOnInsert: { ts: thermostat.ts.toString() }
            });
        }
        console.log(i, new Date());
        thermostatBulkInsert.execute();
    }
    console.log('processing done!', new Date())
}

router.get('/getChartDetails',async (req, res, next) => {
    let thermostatMeanCount = [];
    let startDate, endDate;
    if(!req.query.startDate) {
        startDate = 1420050600000; //jan 1 2015
    } else {
        startDate = Number(req.query.startDate);
    }
    if(!req.query.endDate) {
        endDate = 1577730600000; //dec 31 2019
    } else {
        endDate = Number(req.query.endDate);
    }
    console.log(startDate, endDate);
    try{
        var clientConnection = await client.createMongoConnection();
        const reducer = (accumulator, currentValue) => accumulator + currentValue.value;
        for (let day = startDate; day <= endDate; day+= 86400000) {
            let tempEndDay = day + 86400000;
            let thermostatT1Count2014 = await clientConnection.collection('thermostat').find({$and:[{"ts": {$gte: day.toString(), $lt: tempEndDay.toString()}}]},{"value": 1, _id : 0}).toArray();
            if(thermostatT1Count2014.length) {
                let meanValue = thermostatT1Count2014.reduce(reducer, 0)/thermostatT1Count2014.length;
                thermostatMeanCount.push([moment(day).format("DD MMM YYYY"), meanValue]);   
            }
            console.log(new Date(day))
        }
        res.status(200);
        res.send(thermostatMeanCount);
    } catch(ex) {
        console.error(ex);
        res.status(400);
        res.send('something went wrong');
    }
});

module.exports = router;
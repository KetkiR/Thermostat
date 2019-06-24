var MongoClient = require('mongodb').MongoClient;

const createMongoConnection = async () => {
    return await MongoClient.connect('mongodb://localhost:27017/temp');
//   db.collection('users').find().toArray(function (err, result) {
//     if (err) throw err

//     console.log(result);
//     return result;
//   });
//});
}
module.exports  = { createMongoConnection }
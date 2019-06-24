const app = require('express')();
const http = require('http')//.Server(app);
const server = http.createServer(app);

var indexRouter = require('./routes/thermostatChart');

const port = 3000;

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});
app.use('/', indexRouter);


server.listen(port, () => {
  console.log(`Listening on *:${port}`);
});
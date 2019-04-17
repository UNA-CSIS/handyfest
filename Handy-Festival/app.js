const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const bodyParser = require('body-parser');
const path = require('path');
const events = require('./routes/events');

app.use(express.static(path.join(__dirname, '/files')));


app.use(bodyParser.json());
app.use(events);



server.listen(process.env.PORT || 4500, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Listening at", addr.address + ":" + addr.port);
});

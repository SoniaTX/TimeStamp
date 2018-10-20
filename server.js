// server.js
// where your node app starts

// init project
var express = require('express');
var app = express();

// enable CORS (https://en.wikipedia.org/wiki/Cross-origin_resource_sharing)
// so that your API is remotely testable by FCC 
var cors = require('cors');
app.use(cors({optionSuccessStatus: 200}));  // some legacy browsers choke on 204

// http://expressjs.com/en/starter/static-files.html
app.use(express.static('public'));

app.get("/:timeEquiv", function (req, res) {
  let parseTime,returnObject
  
  parseTime = Number(req.params.timeEquiv) ? Number(req.params.timeEquiv) : Date.parse(req.params.timeEquiv)
  let naturalTime = new Date(parseTime)

  if(parseTime && naturalTime!="Invalid Date") {
    
    returnObject = {"date":naturalTime.toDateString(), "unix":parseTime.toString()}
  } else {
    returnObject = {"date":null, "unix":null}
  }
  res.send(returnObject);
});

// http://expressjs.com/en/starter/basic-routing.html
app.get("/", function (req, res) {
  res.sendFile(__dirname + '/views/index.html');
});


// your first API endpoint... 
//app.get("/api/hello", function (req, res) {
 // res.json({greeting: 'hello API'});
//});

app.use(function (err, req, res, next) {
  res.send({"unix":null,"date":null,"error":err.message})
})



// listen for requests :)
var listener = app.listen(process.env.PORT, function () {
  console.log('Your app is listening on port ' + listener.address().port);
});
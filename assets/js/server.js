var express= require("express");
var app = express();

// __dirname will use the current path from where you run this file
var dirName = __dirname + '\\music';
app.use(express.static(__dirname));
app.use(express.static(dirName));
app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
}); 


app.listen(8000);
console.log('Listening on port 8000');

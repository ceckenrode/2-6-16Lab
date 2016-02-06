var express = require('express');
var app = express();
var PORT = process.env.port || 8080;

app.use("/js", express.static("public/js"));
app.use("/css", express.static("public/css"));

app.get('/', function(req, res) {
  res.sendFile(process.cwd() + '/views/home.html');
});

app.get('/registration', function(req, res) {
  res.sendFile(process.cwd() + '/views/registration.html');
});

app.get('/admin', function(req, res) {
  res.sendFile(process.cwd() + '/views/admin.html');
});

app.listen(PORT, function(){
  console.log('Listening on port %s', PORT);
})
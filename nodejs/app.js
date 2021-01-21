var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var urlencodedParser = bodyParser.urlencoded({ extended: false });


app.set('view engine', 'ejs');
app.use('/assets', express.static('stuff'));

app.get('/', function(req,res){
  res.render('index');
});

app.get('/contact',function(req,res){
  res.render('contact', {qs: req.query});
});

app.post('/contact',urlencodedParser, function(req,res){
  console.log(req.body);
  res.render('contact-success', {data: req.body});
});

app.get('/profile/:name', function(req,res){
  var data = {age: 23, job: 'ninja', hobbies: ['eating', 'fighting', 'fishing']};
  res.render('profile', {person: req.params.name, data: data});
});

app.listen(3000);

/*var http = require('http');
var fs = require('fs');

var server = http.createServer(function(req,res){
  console.log('request was made: ' + req.url);
  if(req.url === '/home' || req.url === '/'){
    res.writeHead(200, {'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/index.html').pipe(res);
  } else if(req.url === '/contact'){
    res.writeHead(200,{'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/contact.html').pipe(res);
  } else if(req.url === '/api/ninjas') {
    var ninjas = [{name: 'Ucchwas', age: 23}, {name: 'Prokrita', age: 22}];
    res.writeHead(200, {'Content-Type': 'application/json'});
    res.end(JSON.stringify(ninjas));
  } else {
    res.writeHead(200,{'Content-Type': 'text/html'});
    fs.createReadStream(__dirname + '/404.html').pipe(res);
  }

});

server.listen(3000, '127.0.0.1');
console.log('Now listening to port 3000');
*/

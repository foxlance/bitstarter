var express = require('express');
var fs = require('fs');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
	//response.send('Hello World 2!');
	//var content = fs.readFileSync('index.html');
	//response.send(content);
	var content = fs.readFileSync('index.html', 'utf8');

	var buffer = new Buffer(256);
	len = buffer.write(content, 0);
	response.send(buffer.toString('utf8', 0, len));
	
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
	console.log("Listening on " + port);
});
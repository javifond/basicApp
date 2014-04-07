//Getting express core module
var express = require('express');
//Gettin file syste core module
//var fs = require('fs');
//Defining my server instance
var myServer = express();
//BasicParser Middleware
myServer.use(express.urlencoded());
myServer.use(express.json());
//Using the template engine with handle bars
myServer.set('view engine', 'hbs');
myServer.set('view engine', 'html');
myServer.engine('html', require('hbs').__express);
//Define the public folder for shared resources with browser
myServer.use(express.static('public'));
//Defining processes for different requests
//Getting Home view from route '/'
myServer.get('/', function(req, res) {
	res.render('home');
});
//Getting About view from route '/about'
myServer.get('/about', function(req, res) {
	//res.send('hello');
	res.render('about');
});
//Example of POST AJAX Request from browser
// myServer.post('/', function(req, res) {
// 	if (req.body) {
// 		res.send('succesfull');
// 	} else {
// 		res.send(500, {
// 			'error': 'something went wrong'
// 		});
// 	}
// });
//Start server listening in port indicated and running
myServer.listen(2000);
console.log('Server running at http://127.0.0.1:2000/');

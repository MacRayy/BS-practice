'use strict'

const server = () => {
	const express = require('express');
	const app = express();

	app.use('/app/', express.static('app/'));

	app.use('/app/lib', express.static('app/lib'));

	app.use('/assets', express.static('assets'));

	app.use('/view', express.static('view'));

	app.use('/data', express.static('data'));

  app.get('/', (req, res) => {
		res.sendFile(__dirname + '/index.html');
  });

  app.get('/data', (req, res) => {
		res.json([{
			"name": "Conney",
			"breed": "border collie",
			"color": "black",
			"hunger": true,
			"pic": "assets/dog.png"
		}, {
			"name": "Disco",
			"breed": "collie",
			"color": "black",
			"hunger": true,
			"pic": "assets/dog.png"
		}, {
			"name": "Lujza",
			"breed": "mix breed",
			"color": "black",
			"hunger": false,
			"pic": "assets/dog.png"
		}, {
			"name": "Berta",
			"breed": "fox terrier",
			"color": "white",
			"hunger": true,
			"pic": "assets/dog.png"
		}, {
			"name": "Domper",
			"breed": "mix breed",
			"color": "brown",
			"hunger": true,
			"pic": "assets/dog.png"
		}]);
  });

  app.listen(3000, () => console.log('server running'));
};

server();

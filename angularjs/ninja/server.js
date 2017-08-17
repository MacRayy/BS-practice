'use strict'

const server = () => {
	const express = require('express');
	const app = express();

	app.use('/app/', express.static('app/'));

	app.use('/app/lib', express.static('app/lib'));

	app.use('/assets', express.static('assets'));

	app.use('/view', express.static('view'));

  app.get('/', (req, res) => {
		res.sendFile(__dirname + '/index.html');
  });

  app.listen(3000, () => {
		console.log('server running');
  });
};

server();

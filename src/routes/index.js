const express = require('express');

const personalRouter = require('./personal.routes');

function routerAPI(app) {
	const router = express.Router();
	app.use('/api/v1', router);
	router.use('/personal', personalRouter);
}

module.exports = routerAPI;

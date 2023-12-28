const express = require('express');
const router = express.Router();
const personalController = require('../controllers/personal.controller');

router
	.get('/', personalController.get)
	.get('/:id', personalController.getById)
	.post('/', personalController.create)
	.put('/:id', personalController.update)
	.delete('/:id', personalController.destroy);

module.exports = router;

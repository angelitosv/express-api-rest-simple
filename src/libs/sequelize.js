const { Sequelize } = require('sequelize');
const { config } = require('../config/config.js');
const setupModels = require('./../database/models');

const sequelize = new Sequelize(config.dbName, config.dbUser, config.dbPass, {
	host: config.dbHost,
	dialect: 'postgres',
	logging: false,
});

sequelize.sync();
setupModels(sequelize);
module.exports = sequelize;

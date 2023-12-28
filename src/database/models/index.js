const { Personal, PersonalSchema } = require('./personal.model.js');

function setupModels(sequelize) {
	Personal.init(PersonalSchema, Personal.config(sequelize));
}

module.exports = setupModels;

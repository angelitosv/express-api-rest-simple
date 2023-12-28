const { models } = require('../libs/sequelize');

class PersonalService {
	constructor() {}

	async find() {
		const response = await models.Personal.findAll();
		return response;
	}

	async findById(id) {
		const response = await models.Personal.findByPk(id);
		return response;
	}

	async create(data) {
		const response = await models.Personal.create(data);
		return response;
	}

	async update(id, data) {
		const record = await this.findById(id);
		const response = await record.update(data);
		return response;
	}

	async delete(id) {
		const record = await this.findById(id);
		await record.destroy();
		return { deleted: true };
	}
}

module.exports = PersonalService;

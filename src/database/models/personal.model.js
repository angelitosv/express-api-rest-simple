const { Model, DataTypes, Sequelize } = require('sequelize');

const PERSONAL_TABLE = 'personal';

class Personal extends Model {
	static config(sequelize) {
		return {
			sequelize,
			tableName: PERSONAL_TABLE,
			modelName: 'Personal',
			timestamps: true,
		};
	}
}

const PersonalSchema = {
	id: {
		type: DataTypes.UUID,
		defaultValue: Sequelize.literal('uuid_generate_v4()'),
		allowNull: false,
		primaryKey: true,
	},
	name: {
		allowNull: false,
		type: DataTypes.STRING,
		field: 'name',
	},
	address: {
		allowNull: false,
		type: DataTypes.STRING,
		field: 'address',
	},
	phone: {
		allowNull: true,
		type: DataTypes.STRING,
		field: 'phone',
	},
	email: {
		allowNull: true,
		type: DataTypes.STRING,
		field: 'email',
	},
};

module.exports = { Personal, PersonalSchema };

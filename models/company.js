const {DataTypes} = require('sequelize');
const {db_connection} = require('../database/connection');

const Company = db_connection.define('Company',{
    name: {
        type: DataTypes.STRING
    },
    tipeCompany: {
        type: DataTypes.STRING
    },
    link: {
        type: DataTypes.STRING
    }

},{
    freezeTableName: true,
    tableName: 'Company'
}
);

module.exports = {
    Company
};

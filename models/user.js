const {DataTypes} = require('sequelize');
const {db_connection} = require('../database/connection');

//Reference Models - Foreign keys
const {Company} = require('./company');
const {Customer} = require('.customer');

const User = db_connection.define('user',{
    email: {
        type: DataTypes.STRING
    },
    name: {
        type: DataTypes.STRING
    },
    lastname: {
        type: DataTypes.STRING
    },
    status: {
        type: DataTypes.BOOLEAN        
    },
    isConfirmed: {
        type: DataTypes.BOOLEAN
    },
    registerdBy: {
        type: DataTypes.INTEGER
    },
    Role_id: {
        type: DataTypes.INTEGER
    },
    Cliet_id: {
        type: DataTypes.INTEGER,
        references:{
            model: Company,
            key: 'id'
        }
    }  
},{
    freezeTableName: true,
    tableName: 'user'
}

);

module.exports = {User};
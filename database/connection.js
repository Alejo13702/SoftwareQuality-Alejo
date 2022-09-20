const {Sequelize} = require ('sequelize');

const db_connection = new Sequelize(
  'user_test',
  'root',
  'foro1234',{
    host: '127.0.0.1',
    dialect: 'mysql',
    dialectModule:require('mysql2'),
  });

module.exports = {
  db_connection
} 

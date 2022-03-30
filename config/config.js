//requiring sequelize 
const Sequelize = require('sequelize');

//adding dotenv to auto connect to the .env file 
require('dotenv').config();

// create connection to our db
const sequelize = process.env.JAWSDB_URL //add jawsdb 
  ? new Sequelize(process.env.JAWSDB_URL)
  : new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PW, {
    //creating connection on localhost
      host: 'localhost',
      dialect: 'mysql',
      port: 3306
    });

    //export
module.exports = sequelize;

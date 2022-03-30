//req sequelize 
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class comment extends Model {}

comment.init(
  {
   
    body: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize
  }
);

//export
module.exports = comment;

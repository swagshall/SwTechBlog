//req sequelize 
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class comment extends Model {}

//create the modle for what a comment needs 
comment.init(
  {
   
    body: {
      type: DataTypes.STRING,
      //cant be null
      allowNull: false
    }
  },
  {
    sequelize
  }
);

//export
module.exports = comment;

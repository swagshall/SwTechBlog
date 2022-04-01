//req sequelize 
const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class post extends Model {}

//create model for what a post need 
post.init(
  {
    //post needs a title and a body 
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize
  }
);

//export
module.exports = post;
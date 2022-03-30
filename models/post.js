const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/config');

class post extends Model {}

post.init(
  {
    title: DataTypes.STRING,
    body: DataTypes.STRING
  },
  {
    sequelize
  }
);

//export
module.exports = post;
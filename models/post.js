const { Sequelize, Model, DataTypes } = require('sequelize');
const sequelize = require('../config/configs');

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

module.exports = post;
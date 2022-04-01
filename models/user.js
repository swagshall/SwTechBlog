const { Model, DataTypes } = require('sequelize');
//req bcrypt
const bcrypt = require('bcrypt');
//req sequelize 
const sequelize = require('../config/config');

//check passw using bcrypt
class user extends Model {
  checkPassword(loginPw) {
    return bcrypt.compareSync(loginPw, this.password);
  }
}

//create model for what a user need 
user.init(
  {
    //id is req, auto gen by db 
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true, 
      allowNull: false  
    },
    //username is req 
    username: {
      type: DataTypes.STRING,
      allowNull: false
    },
    //pass is req, needs have a leng of at least 4
    password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [4]
      }
    }
  },
  //hooks
  {
    hooks: {
      //before create user check pass with bcrypt 
      beforeCreate: async (newUserData) => {
        newUserData.password = await bcrypt.hash(newUserData.password, 10);
        return newUserData;
      },
      //before update uper check with bcrypt 
      beforeUpdate: async (updatedUserData) => {
        updatedUserData.password = await bcrypt.hash(updatedUserData.password, 10);
        return updatedUserData;
      }
    },
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'user'
  }
);

//export
module.exports = user;

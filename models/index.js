//create vars to connect to other models 
const user = require('./user');
const post = require('./post');
const comment = require('./comment');

//post belongs to a user 
post.belongsTo(user, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

//allows a post to have many comments 
post.hasMany(comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

//comment has to belong to a user 
comment.belongsTo(user, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

//export all models
module.exports = {
  user,
  comment,
  post
};
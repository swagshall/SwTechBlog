const user = require('./user');
const post = require('./post');
const comment = require('./comment');

post.belongsTo(user, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

post.hasMany(comment, {
  foreignKey: 'postId',
  onDelete: 'CASCADE'
});

comment.belongsTo(user, {
  foreignKey: 'userId',
  onDelete: 'CASCADE'
});

module.exports = {
  user,
  comment,
  post
};
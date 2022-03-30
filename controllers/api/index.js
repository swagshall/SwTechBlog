//creating router adn req express 
const router = require('express').Router();

//create connection to all the other routes in the api file 
const userRoutes = require('./user-routes.js');
const postRoutes = require('./post-routes');
const commentRoutes = require('./comment-routes');


router.use('/user', userRoutes);
router.use('/post', postRoutes);
router.use('/comment', commentRoutes);

//export
module.exports = router;
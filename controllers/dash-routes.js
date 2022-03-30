//create router 
const router = require('express').Router();
//connect to post models 
const { post } = require('../models');
const withAuth = require('../utils/auth');

//create a get route to get all posts to be displayed on the dashboard 
router.get('/', withAuth, async (req, res) => {
  try {
    const postData = await post.findAll({
      where: {
        userId: req.session.userId,
      },
    });

    const posts = postData.map((post) => post.get({ plain: true }));

    //call to handelbars 
    res.render('allPostAdmin', {
      layout: 'dashboard',
      posts,
    });
  } 
  //if error redirect to login page  
  catch (err) {
    res.redirect('login');
  }
});

//create get route with /new 
router.get('/new', withAuth, (req, res) => {
  
  res.render('newPost', {
    layout: 'dashboard',
  });
});

//get route by id 
router.get('/edit/:id', withAuth, async (req, res) => {
  try {
    //find post by primary key 
    const postData = await post.findByPk(req.params.id);

    if (postData) {
      const post = postData.get({ plain: true });

      //call to edit post handelbars 
      res.render('editPost', {
        layout: 'dashboard',
        post,
      });
    } 
    // if error return error 
    else {
      res.status(404).end();
    }
  } 
  // if error redirect to login 
  catch (err) {
    res.redirect('login');
  }
});

//exoport
module.exports = router;
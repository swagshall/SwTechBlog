// create router 
const router = require('express').Router();
//connect to post comment and user models 
const { post, comment, user } = require('../models/');
console.log(post);

// get all posts for homepage
router.get('/', async (req, res) => {

  //console to see how far the code was going for debugging purposes 
  console.log('inside / my home routes')
  try {
    //find all post 
    const postData = await post.findAll({
      include: [user],
    });


    console.log('postData', postData)
    const posts = postData.map((post) => post.get({ plain: true }));
    console.log(posts);


    res.render('allPost', { posts });
  } 
  //if error return error 
  catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

// get single post by id 
router.get('/post/:id', async (req, res) => {
  try {
    //find post by primary key 
    const postData = await post.findByPk(req.params.id, {
      include: [
        user,
        {
          model: comment,
          include: [user],
        },
      ],
    });

    if (postData) {
      const post = postData.get({ plain: true });

      //connect to single post handelbars 
      res.render('singlePost', { post });
    } 
    //else returna 404 error status 
    else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//get route with login 
router.get('/login', (req, res) => {
  if (req.session.loggedIn) {
    //redirect to home route 
    res.redirect('/');
    return;
  }

  //connect to login haneldbars 
  res.render('login');
});

router.get('/signUp', (req, res) => {
  if (req.session.loggedIn) {
    //redirect to home route 
    res.redirect('/');
    return;
  }

  //connect to sign up haneldbars
  res.render('signUp');
});

//export 
module.exports = router;

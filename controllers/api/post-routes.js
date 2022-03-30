const router = require('express').Router();
//call to post moddel 
const { post } = require('../../models/');
//include the req auth 
const withAuth = require('../../utils/auth');

//create route to create a new post 
router.post('/', withAuth, async (req, res) => {
  const body = req.body;

  try {
    const newPost = await post.create({ ...body, userId: req.session.userId });
    res.json(newPost);
  }
  //if error return error 
   catch (err) {
    res.status(500).json(err);
  }
});

//create a route to update a post by id 
router.put('/:id', withAuth, async (req, res) => {
  try {
    const [affectedRows] = await post.update(req.body, {
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } 
    //if num rows affected is less then 0 return a 404 error
    else {
      res.status(404).end();
    }
  } catch (err) {
    res.status(500).json(err);
  }
});

//add route to deldte a post by ref the id in the route 
router.delete('/:id', withAuth, async (req, res) => {
  try {  //start try 
    const [affectedRows] = post.destroy({
      where: {
        id: req.params.id,
      },
    });

    if (affectedRows > 0) {
      res.status(200).end();
    } 
    //if num rows affected is less then 0 return a 404 error 
    else {
      res.status(404).end();
    }
  } //end try 
  //return if error
  catch (err) {
    res.status(500).json(err);
  }
});

//export
module.exports = router;

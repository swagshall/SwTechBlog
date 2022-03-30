//create router 
const router = require('express').Router();
const { comment } = require('../../models/');
//include autherization 
const withAuth = require('../../utils/auth');

//create route for creating a new comment 
router.post('/', withAuth, async (req, res) => {
  try {
    const newComment = await comment.create({
      ...req.body,
      userId: req.session.userId,
    });
    res.json(newComment);
  } 
  //if error return error 
  catch (err) {
    res.status(500).json(err);
  }
});

//export router
module.exports = router;
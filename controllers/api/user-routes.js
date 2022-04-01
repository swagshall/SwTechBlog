const router = require('express').Router();
//connect to user models 
const { user } = require('../../models');

//create a route to create a new user 
router.post('/', async (req, res) => {
  try {
    //the body of the json for creating a new user req a username and pass
    const createNewUser = await user.create({
      username: req.body.username,
      password: req.body.password,
    });

    req.session.save(() => {
      req.session.userId = newUser.id;
      req.session.username = newUser.username;
      req.session.loggedIn = true;

      res.json(createNewUser);
    });
  } 
  //if error return error 
  catch (err) {
    res.status(500).json(err);
  }
});

//route to create new user in the login route 
router.post('/login', async (req, res) => {
  try {
    const user = await user.findOne({
      where: {
        username: req.body.username,
      },
    });

    //if no such user exsist and trying to login 
    if (!user) {
      res.status(400).json({ message: 'No such user found!' });
      return;
    }

    //if there is such a user check the password to make sure it matches the user 
    const validPass = user.checkPassword(req.body.password);

    //if its not a valid password return no user found or password is wrong 
    if (!validPass) {
      res.status(400).json({ message: 'No such user found!' });
      return;
    }

    req.session.save(() => {
      req.session.userId = user.id;
      req.session.username = user.username;
      req.session.loggedIn = true;

      //if login worked return user is loged in 
      res.json({ user, message: 'Youre logged in!' });
    });
  } catch (err) {
    res.status(400).json({ message: 'No such user found!' });
  }
});

//create route for logout 
router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } 
  //if error return error 
  else {
    res.status(404).end();
  }
});

//export 
module.exports = router;

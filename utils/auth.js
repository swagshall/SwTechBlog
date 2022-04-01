const withAuth = (req, res, next) => {
  if (!req.session.userId) {
    //redirect to login 
    res.redirect("/login");
  } else {
    next();
  }
};

//export 
module.exports = withAuth;

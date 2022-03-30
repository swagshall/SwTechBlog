//create router 
const router = require('express').Router();

//connect to all the controllers in the api index 
const apiRoutes = require('./api/');
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./dash-routes.js');



router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);
router.use('/api', apiRoutes);

//export 
module.exports = router;
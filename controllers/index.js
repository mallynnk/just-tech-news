//ROUTES>>>

const router = require('express').Router();
const homeRoutes = require('./home-routes.js');
const dashboardRoutes = require('./api/dashboard-routes.js');

const apiRoutes = require('./api');

router.use('/api', apiRoutes);
router.use('/', homeRoutes);
router.use('/dashboard', dashboardRoutes);

router.use((req, res) => {
  res.status(404).end();
});



module.exports = router;
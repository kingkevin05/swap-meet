const router = require('express').Router();

const apiRoutes = require('./api');
// const yourStuffRoutes = require('./yourstuff-routes.js');

router.use('/api', apiRoutes);
// router.use('/yourstuff', yourStuffRoutes)

router.use((req, res) => {
  res.status(404).end();
});

module.exports = router;
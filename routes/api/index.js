const router = require('express').Router();

const userRoutes = require('./user-routes.js');
const itemRoutes = require('./item-routes.js');
const categoriesRoutes = require('./categories-routes.js');

router.use('/users', userRoutes);
router.use('/items', itemRoutes);
router.use('/categories', categoriesRoutes);

module.exports = router;
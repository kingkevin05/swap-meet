const router = require('express').Router();
const { Item, Categories } = require('../../models');

// Get categories
router.get('/categories', (req, res) => {
    Categories.findAll({})
    .then((categoriesData) => {
        console.log(categoriesData);
        res.render(categoriesData, 'homepage')
        // double check homepage is where categories on navbar renders
    })
    .catch(err => {
        console.log(err);
    })
});
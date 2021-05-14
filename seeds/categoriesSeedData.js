const sequelize = require('../config/connection');
const { Categories } = require('../models');

const categoriesData = [
    {
        id: "1",
        title: "electronics"
    },
    {
        id: "2",
        title: "miscelaneous"
    }
];

const categoriesSeedData = () => Categories.bulkCreate(categoriesData, {individualHooks: true});

module.exports = categoriesSeedData;
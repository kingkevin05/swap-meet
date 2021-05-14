const sequelize = require('../config/connection');
const { Categories } = require('../models');

const categoriedData = [
    {
        id: "1",
        title: "electronics"
    },
    {
        id: "2",
        title: "miscelaneous"
    }
];

const categoriesSeedData = () => Categories.bulkCreate(categorieData, {individualHooks: true});

module.exports = categoriesSeedData;
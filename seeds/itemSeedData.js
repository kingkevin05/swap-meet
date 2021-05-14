const sequelize = require('../config/connection');
const { Item } = require('../models');

const itemData = [
    {
        id: "1",
        title: "GameBoy",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Game-Boy-FL.jpg/1200px-Game-Boy-FL.jpg",
        item_description: "retro game fun"
    }
];

const itemSeedData = () => Item.bulkCreate(itemData, {individualHooks: true});

module.exports = itemSeedData;
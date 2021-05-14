const sequelize = require('../config/connection');
const { Igem } = require('../models');

const itemData = [
    {
        id: "1",
        title: "GameBoy",
        imge_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Game-Boy-FL.jpg/1200px-Game-Boy-FL.jpg",
        item_description: "retro game fun"
    }
];

const itemSeedData = () => item.bulkCreate(itemData, {individualHooks: true});

module.exports = itemSeedData;
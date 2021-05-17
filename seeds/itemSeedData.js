const sequelize = require('../config/connection');
const { Item } = require('../models');

const itemData = [
    {
        id: "1",
        title: "GameBoy",
        image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/Game-Boy-FL.jpg/1200px-Game-Boy-FL.jpg",
        item_description: "retro game fun",
        user_id: "1",
        categories_id: "1"
    },
    {
        id: "2",
        title: "TV",
        image_url: "http://www.sikantis.com/start/wp-content/uploads/2013/07/a.jpg",
        item_description: "22inch flatscreen",
        user_id: "1",
        categories_id: "1"
    },
    {
        id: "3",
        title: "laptop",
        image_url: "https://image.shutterstock.com/image-photo/laptop-computer-isolated-on-white-260nw-1413840062.jpg",
        item_description: "old laptop, not best condition",
        user_id: "2",
        categories_id: "1"
    },
    {
        id: "4",
        title: "Xbox",
        image_url: "https://i.pcmag.com/imagery/reviews/02SwziVCVPbEvJqMvSlGf1t-2..1569476809.jpg",
        item_description: "xbox 360, one controller",
        user_id: "3",
        categories_id: "2"
    }
];

const itemSeedData = () => Item.bulkCreate(itemData, {individualHooks: true});

module.exports = itemSeedData;
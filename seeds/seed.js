const sequelize = require('../config/connection');
const { User, Item, Categories } = require('../models');

// const userSeedData = require('./userSeedData.json');
const categoriesSeedData = require('./categoriesSeedData.json');
// const itemSeedData = require('./itemSeedData.json');

const seedDatabase = async () => {
    await sequelize.sync({ force: true })

    // await User.bulkCreate(userSeedData)
    await Categories.bulkCreate(categoriesSeedData)
    // await Item.bulkCreate(itemSeedData)

    process.exit(0)
};

seedDatabase();
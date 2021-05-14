const sequelize = require('../config/connection');

const userSeedData = require('./userSeedData.js');
const categoriesSeedData = require('./categoriesSeedData.js');
const itemSeedData = require('./itemSeedData.js');

const seedDatabase = async () => {
    await sequelize.sync({ force: true })

    await userSeedData();
    await categoriesSeedData();
    await itemSeedData();

    process.exit(0);
};

seedDatabase();
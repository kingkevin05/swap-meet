const sequelize = require('../config/connection');
const { User, Item } = require('../models');

const userData = [
    {
        id: "1",
        firstName: "Noah",
        lastName: "Fake",
        username: "fakeuser",
        email: "fakeuser@gmail.com",
        password: "guest",
        phoneNumber: "5105558888",
        address: "1234 Main St, Berkeley, CA, 94702"
    }
];

const userSeedData = () => user.bulkCreate(userData, {individualHooks: true});

module.exports = userSeedData;
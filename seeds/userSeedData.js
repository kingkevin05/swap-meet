const sequelize = require("../config/connection");
const { User, Item } = require("../models");

const userData = [
  {
    id: "1",
    firstName: "Noah",
    lastName: "Fake",
    username: "fakeuser",
    email: "fakeuser@gmail.com",
    password: "guest",
    phoneNumber: "5105558888",
    address: "1234 Main St, Berkeley, CA, 94702",
  },
  {
    id: "2",
    firstName: "Kevin",
    lastName: "Faker",
    username: "fakekevin",
    email: "fakekevin@gmail.com",
    password: "guest",
    phoneNumber: "5105557777",
    address: "1235 Main St, Berkeley, CA, 94702",
  },
  {
    id: "3",
    firstName: "Lawrence",
    lastName: "Fakest",
    username: "fakestuser",
    email: "fakestuser@gmail.com",
    password: "guest",
    phoneNumber: "5105556666",
    address: "1236 Main St, Berkeley, CA, 94702",
  },
  {
    id: "4",
    firstName: "Manny",
    lastName: "Unreal",
    username: "mannyisthebest",
    email: "mannyr@gmail.com",
    password: "guest",
    phoneNumber: "5105554444",
    address: "1237 Main St, Berkeley, CA, 94702",
  }
];

const userSeedData = () => User.bulkCreate(userData, { individualHooks: true });

module.exports = userSeedData;

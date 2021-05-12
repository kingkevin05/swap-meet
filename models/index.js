const User = require("./User");
const Item = require("./Item");
const Categories = require("./Categories");

User.hasMany(Item, { foreignKey: "user_id", onDelete: "CASCADE" });

Categories.hasMany(Item, { foreignKey: "categories_id" });

Item.belongsTo(User, { foreignKey: "user_id" });

Item.belongsTo(Categories, { foreignKey: "categories_id" });

module.exports = { User, Item, Categories };

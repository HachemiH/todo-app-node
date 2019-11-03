const Sequelize = require("sequelize");
const db = require("../config/database");

const Item = db.define("item", {
  item: {
    type: Sequelize.STRING
  }
});

module.exports = Item;

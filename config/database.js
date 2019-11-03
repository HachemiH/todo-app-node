const Sequelize = require("sequelize");

module.exports = new Sequelize("todo", "Hachemi", "password", {
  host: "localhost",
  dialect: "postgres"
});

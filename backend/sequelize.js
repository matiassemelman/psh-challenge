const { Sequelize } = require("sequelize");
const config = require("./config");
const sequelize = new Sequelize(config.development);
// Test the connection
async function testConnection() {
  try {
    await sequelize.authenticate();
    console.log("Database connected succefully");
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
}
testConnection();

module.exports = sequelize;

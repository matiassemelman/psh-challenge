const sequelize = require("../sequelize");
const PlayerStat = require("../models/playerStats");
const syncDatabase = async () => {
  await sequelize.sync();
  console.log("Database synchronized.");
};

const {
  getPlayerStats,
  getTopPlayerStats,
  createPlayerStat,
} = require("../repositories/playerStatRepository");

const getAllPlayerStats = async (req, res) => {
  // Generate a random number from 0 to 10
  const numStats = Math.floor(Math.random() * 11);

  // Create an array to hold the promises
  const promises = [];

  // Create the player stats
  for (let i = 0; i < numStats; i++) {
    promises.push(PlayerStat.create(req));
  }

  // Wait for all player stats to be created
  const newStats = await Promise.all(promises);

  // Log the new stats and send them in the response
  newStats.forEach((stat) => console.log(stat.toJSON()));
  res.json(newStats);
};

const newPlayerStat = async (req, res) => {
  await syncDatabase();
  const newStat = await PlayerStat.create(req);
  console.log(newStat.toJSON());
};

const getTopPlayers = async (req, res) => {
  const { limit = 10 } = req.query;
  const topPlayerStats = await getTopPlayerStats(limit);
  res.json(topPlayerStats);
};

module.exports = {
  getAllPlayerStats,
  getTopPlayers,
  newPlayerStat,
};

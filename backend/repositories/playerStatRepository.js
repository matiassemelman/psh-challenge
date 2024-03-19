const { newPlayerStat } = require("../controllers/playerStatController");
const { PlayerStat } = require("../models/playerStats");

const createPlayerStat = async (data) => {
  return await newPlayerStat(data);
};

const getPlayerStats = async () => {
  return await PlayerStat.findAll();
};

const getTopPlayerStats = async (limit) => {
  return await PlayerStat.findAll({
    order: [["score", "DESC"]],
    limit,
  });
};

module.exports = {
  createPlayerStat,
  getPlayerStats,
  getTopPlayerStats,
};

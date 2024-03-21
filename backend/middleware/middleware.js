const PlayerStat = require("../models/playerStats");

const createPlayerStat = async (data) => {
  return await PlayerStat.create(data);
};

const getTopPlayerStats = async () => {
  return await PlayerStat.findAll({
    order: [["score", "DESC"]],
    limit: 10,
  });
};

module.exports = {
  createPlayerStat,
  getTopPlayerStats,
};

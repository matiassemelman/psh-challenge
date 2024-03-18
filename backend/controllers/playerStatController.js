const {
  getPlayerStats,
  getTopPlayerStats,
} = require("../repositories/playerStatRepository");

const getAllPlayerStats = async (req, res) => {
  const playerStats = await getPlayerStats();
  res.json(playerStats);
};

const getTopPlayers = async (req, res) => {
  const { limit = 10 } = req.query;
  const topPlayerStats = await getTopPlayerStats(limit);
  res.json(topPlayerStats);
};

module.exports = {
  getAllPlayerStats,
  getTopPlayers,
};

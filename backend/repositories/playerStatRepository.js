const { PlayerStat } = require("../models");

const createPlayerStat = async (data) => {
  return await PlayerStat.create(data);
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

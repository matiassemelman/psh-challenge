const sequelize = require("../sequelize");
const PlayerStat = require("../models/playerStats");

const syncDatabase = async () => {
  await sequelize.sync();
  console.log("Database synchronized.");
};

const newPlayerStat = async (data) => {
  await syncDatabase();
  const newStat = await PlayerStat.create(data);
  console.log(newStat.toJSON());
  return newStat;
};

const getTopPlayers = async (req, res) => {
  try {
    await syncDatabase();
    const topPlayerStats = await PlayerStat.findAll({
      order: [["score", "DESC"]],
      limit: 10,
    });
    res.json(topPlayerStats);
  } catch (error) {
    console.error("Error getting top players:", error);
    res.status(500).json({ error: "Error getting top players" });
  }
};

module.exports = {
  getTopPlayers,
  newPlayerStat,
};

const express = require("express");
const router = express.Router();
const playerStatService = require("../services/playerStatService");
const playerStatController = require("../controllers/playerStatController");

router.get("/api/players/top", playerStatController.getTopPlayers);

// New route that creates a player statistic
router.get("/api/players/create", async (req, res) => {
  const newStat = await playerStatService.generateRandomPlayerStats();
  res.json(newStat);
});

module.exports = router;

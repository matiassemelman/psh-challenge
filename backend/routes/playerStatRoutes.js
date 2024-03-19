const express = require("express");
const router = express.Router();
const playerStatService = require("../services/playerStatService");

// router.get("/", playerStatController.getAllPlayerStats);
// router.get("/top", playerStatController.getTopPlayers);

// New route that creates a player statistic
router.get("/create", async (req, res) => {
  const newStat = await playerStatService.generateRandomPlayerStat();
  res.json(newStat);
});

module.exports = router;

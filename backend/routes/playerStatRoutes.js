const express = require("express");
const router = express.Router();
const playerStatController = require("../controllers/playerStatController");

router.get("/", playerStatController.getAllPlayerStats);
router.get("/top", playerStatController.getTopPlayers);

module.exports = router;

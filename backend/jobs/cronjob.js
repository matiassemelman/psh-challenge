const cron = require("node-cron");
const { generateRandomPlayerStats } = require("../services/playerStatService");

// Define the scheduled task
const cronJob = cron.schedule("*/5 * * * *", async () => {
  try {
    // Call the function to generate random player statistics
    await generateRandomPlayerStats();
    console.log("Player statistics generated successfully");
  } catch (error) {
    console.error("Error generating player statistics:", error);
  }
});

module.exports = cronJob;

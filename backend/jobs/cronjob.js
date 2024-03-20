const cron = require("node-cron");
const { generateRandomPlayerStat } = require("../services/playerStatService");

// Definir la tarea programada
const cronJob = cron.schedule("*/5 * * * *", async () => {
  try {
    // Llamar a la función para generar estadísticas aleatorias de jugadores
    await generateRandomPlayerStat();
    console.log("Estadísticas de jugadores generadas exitosamente");
  } catch (error) {
    console.error("Error al generar estadísticas de jugadores:", error);
  }
});

module.exports = cronJob;

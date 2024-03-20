const axios = require("axios");
const {
  createPlayerStat,
  getTopPlayerStats,
} = require("../repositories/playerStatRepository");

const generateRandomPlayerStats = async () => {
  try {
    const numberOfPlayers = Math.floor(Math.random() * 11); // Genera un número aleatorio entre 0 y 10
    const playerStats = [];

    for (let i = 0; i < numberOfPlayers; i++) {
      const response = await axios.get("https://randomuser.me/api");
      const { name, picture } = response.data.results[0];
      const nickname = `${name.first} ${name.last}`;
      const profileImage = picture.large;
      const score = Math.floor(Math.random() * 100) + 1;

      const playerStat = await createPlayerStat({
        nickname,
        profileImage,
        score,
      });
      playerStats.push(playerStat);
    }

    return playerStats;
  } catch (error) {
    console.error("Error generating random player stats: ", error);
  }
};

const getTopPlayers = async () => {
  try {
    return await getTopPlayerStats();
  } catch (error) {
    console.error("Error getting top players: ", error);
  }
};

module.exports = {
  generateRandomPlayerStats,
  getTopPlayers,
};

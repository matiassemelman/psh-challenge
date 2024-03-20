const axios = require("axios");
const {
  createPlayerStat,
  getTopPlayerStats,
} = require("../repositories/playerStatRepository");

const generateRandomPlayerStat = async () => {
  try {
    const response = await axios.get("https://randomuser.me/api");
    const { name, picture } = response.data.results[0];
    const nickname = `${name.first} ${name.last}`;
    const profileImage = picture.large;
    const score = Math.floor(Math.random() * 100) + 1;

    return await createPlayerStat({ nickname, profileImage, score });
  } catch (error) {
    console.error("Error generating random player stat: ", error);
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
  generateRandomPlayerStat,
  getTopPlayers,
};

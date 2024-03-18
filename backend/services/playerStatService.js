const axios = require("axios");
const { createPlayerStat } = require("../repositories/playerStatRepository");

const generateRandomPlayerStat = async () => {
  const response = await axios.get("https://randomuser.me/api");
  const { name, picture } = response.data.results[0];
  const nickname = `${name.first} ${name.last}`;
  const profileImage = picture.large;
  const score = Math.floor(Math.random() * 100) + 1;

  return await createPlayerStat({
    nickname,
    profileImage,
    score,
  });
};

module.exports = {
  generateRandomPlayerStat,
};

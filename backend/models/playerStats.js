const { DataTypes } = require("sequelize");
const sequelize = require("../config/database");

const PlayerStat = sequelize.define(
  "PlayerStat",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    playerId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true,
    },
    nickname: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    profileImage: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    score: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "player_stats",
    timestamps: true,
    underscored: true,
  }
);

module.exports = PlayerStat;

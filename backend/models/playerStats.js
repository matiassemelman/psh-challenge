const sequelize = require("../sequelize");
const { DataTypes } = require("sequelize");

const PlayerStat = sequelize.define(
  "PlayerStat",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    playerId: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
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
const syncDatabase = async () => {
  await sequelize.sync();
  console.log("Database synchronized.");
};
syncDatabase();

module.exports = PlayerStat;

const express = require("express");
const playerStatRoutes = require("./routes/playerStatRoutes");
const { Sequelize } = require("sequelize");

const cronJob = require("./jobs/cronjob");
cronJob.start();

const app = express();
app.use(express.json());
const port = 3000;

const startServer = async () => {
  try {
    await sequelize.authenticate();
    console.log("Connection has been established successfully.");
    await sequelize.sync(); // Sincroniza los modelos con la base de datos
    app.listen(port, () => {
      console.log(`Example app listening on port ${port}`);
    });
  } catch (error) {
    console.error("Unable to connect to the database:", error);
  }
};

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASSWORD,
  {
    host: "localhost",
    dialect: "mysql",
  }
);

app.use("/", playerStatRoutes);

// Default route handler
app.get("*", (req, res) => {
  res.send("Hello World!");
});

// Start the server
startServer();

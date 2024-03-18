const connection = require("./utils/connectionData");

connection.connect((err) => {
  if (err) return console.error(err.message);

  console.log("Connected to the MySQL server.");
});

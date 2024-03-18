function getRandomScore() {
  return Math.floor(Math.random() * 100) + 1;
}

async function getRandomUser() {
  const response = await fetch("https://randomuser.me/api");
  const data = await response.json();
  console.log(data.results[0]);
  return data.results[0];
}

async function insertRandomStat() {
  const user = await getRandomUser();
  const score = getRandomScore();
  const timestamp = Math.floor(Date.now() / 1000);

  const query =
    "INSERT INTO stats (player_id, nickname, profile_image, creation_date, score) VALUES (?, ?, ?, ?, ?)";
  connection.query(
    query,
    [
      user.login.uuid,
      user.login.username,
      user.picture.large,
      timestamp,
      score,
    ],
    (err, results) => {
      if (err) throw err;
      console.log("Inserted stat: ", results.insertId);
    }
  );
}

setInterval(insertRandomStat, 5 * 60 * 1000);

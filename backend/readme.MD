# Backend for Player Statistics

This challenge simulates player statistics and inserts them into a MySQL database. It uses the [Random User Generator API](https://randomuser.me/api) to generate random player data.

## Project Structure

## Setup

1. Clone the repository.
2. Navigate to the `backend` directory.
3. Run `npm install` to install the dependencies.
4. Create a `.env` file in the `backend` directory with your MySQL credentials and database name:

## Usage

1. Run `npm run connect` to connect to the MySQL database.
2. Run `npm run simulate` to start simulating player statistics. The script will insert a new player statistic into the database every 5 minutes.

## Dependencies

- [express](https://expressjs.com/)
- [mysql](https://www.npmjs.com/package/mysql)
- [mysql2](https://www.npmjs.com/package/mysql2)
- [sequelize](https://sequelize.org/)

## License

This project is licensed under the ISC license.

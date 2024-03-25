# Player Statistics Project

This project simulates player statistics and inserts them into a MySQL database. It uses the [Random User Generation API](https://randomuser.me/api) to generate random player data.

## Table of Contents

1. [Installation](#installation)
2. [Usage](#usage)
3. [API Documentation](#api-documentation)
4. [Technologies Used](#technologies-used)
5. [Architecture](#architecture)
6. [Development Workflow](#development-workflow)
7. [Testing](#testing)
8. [Deployment](#deployment)
9. [Contributing](#contributing)
10. [License](#license)

## Installation

1. Clone the repository.
2. Navigate to the `backend/` directory.
3. Run `npm install` to install the dependencies.
4. Create a `.env.local` file in the `backend/` directory with your MySQL credentials and the database name:

```
   DB_HOST=localhost
   DB_PORT=3306
   DB_USER=root
   DB_PASSWORD=yourpassword
   DB_NAME=yourdatabase
```

5. Navigate to the `frontend/` directory.
6. Run `npm install` to install the dependencies.

## Usage

### Backend

1. Run `npm run connect` to connect to the MySQL database.
2. Run `npm run simulate` to start simulating player statistics. The script will insert a new player statistic into the database every 5 minutes.

### Frontend

1. Run `npm run dev` to start the Vite development server.
2. Open `http://localhost:3000` in your browser to view the user interface.

## API Documentation

The API is structured around a set of routes and controllers. The endpoints created to support the required functionalities are:

- `GET /api/players/top`: This endpoint returns the top 10 players with the highest scores.
- `GET /api/players/create`: This endpoint generates and stores a new player statistic.

## Technologies Used

### Backend

- [Express](https://expressjs.com/)
- [MySQL](https://www.npmjs.com/package/mysql)
- [Sequelize](https://sequelize.org/)
- [Node-Cron](https://www.npmjs.com/package/node-cron)

### Frontend

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)

## Architecture

The project is divided into two main parts: the backend and the frontend. The backend is responsible for simulating player statistics and inserting them into the database. The frontend is responsible for displaying player statistics in a user interface.

## Development Workflow

The development workflow involves running the backend and frontend concurrently. Changes to the backend are automatically reloaded using Nodemon, and changes to the frontend are automatically reloaded using Vite's hot module replacement.

## Contributing

Contributions are welcome. Please open an issue or submit a pull request.

## License

This project is licensed under the ISC license.

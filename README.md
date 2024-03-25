# Player Statistics Project

This project simulates player statistics and inserts them into a MySQL database. It utilizes the [Random User Generation API](https://randomuser.me/api) to generate random player data.

## Project Structure

The project is divided into two main parts: the backend and the frontend.

### Backend

The backend is located in the `backend/` folder and is responsible for simulating player statistics and inserting them into the database. It uses Express to handle HTTP requests and Sequelize to interact with the MySQL database.

### Frontend

The frontend is located in the `frontend/` folder and is responsible for displaying player statistics in a user interface. It utilizes React for the user interface and Vite for bundling and server development.

## Configuration

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

## Dependencies

### Backend

- [express](https://expressjs.com/)
- [mysql](https://www.npmjs.com/package/mysql)
- [sequelize](https://sequelize.org/)
- [node-cron](https://www.npmjs.com/package/node-cron)

### Frontend

- [react](https://reactjs.org/)
- [vite](https://vitejs.dev/)
- [tailwindcss](https://tailwindcss.com/)

## License

This project is licensed under the ISC license.

import { Player } from "./types";
import "./App.css";
import { TopPlayersTable } from "./components/Table";
import { useState, useEffect } from "react";
import { fetchData } from "./lib/utils";
import { ButtonCSV } from "./components/Button";
import { handleDownloadCSV } from "./components/Button/utils";

function App() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  useEffect(() => {
    setLoading(true);
    fetchData(setPlayers, setLastUpdated);
    setLoading(false);

    const interval = setInterval(() => {
      setLoading(true);
      fetchData(setPlayers, setLastUpdated);
      setLoading(false);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (players.length > 0) {
      handleDownloadCSV(players);
    }
  }, [players]);

  return (
    <>
      {loading && <p>Loading...</p>}
      <TopPlayersTable players={players} />
      <div className="flex gap-8 px-4 pt-4 items-center ">
        <h3 className="font-bold">Last Updated: {lastUpdated}</h3>
        <ButtonCSV players={players} />
      </div>
    </>
  );
}

export default App;

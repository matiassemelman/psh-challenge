import { Player } from "./types/PlayerType";
import "./App.css";
import { TopPlayersTable } from "./components/Table";
import { useState, useEffect } from "react";
import { fetchData } from "./lib/utils";

const mockLastUpdated = "2023-06-09T10:30:00Z";

function App() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [lastUpdated, setLastUpdated] = useState<string>(mockLastUpdated);

  useEffect(() => {
    setLoading(true);
    fetchData(setPlayers, setLastUpdated);
    setLoading(false);

    const interval = setInterval(() => {
      setLoading(true);
      fetchData(setPlayers);
      setLoading(false);
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      <TopPlayersTable players={players} lastUpdated={lastUpdated} />
    </>
  );
}

export default App;

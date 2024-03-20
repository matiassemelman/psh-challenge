import { Player } from "./types/PlayerType";
import "./App.css";
import { TopPlayersTable } from "./components/Table";
import { useState, useEffect } from "react";
import { fetchPlayers } from "./lib/utils";

const mockLastUpdated = "2023-06-09T10:30:00Z";

function App() {
  const [players, setPlayers] = useState<Player[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [lastUpdated, setLastUpdated] = useState<string>(mockLastUpdated);

  useEffect(() => {
    setLoading(true);
    fetchPlayers(setPlayers);
    setLoading(false);
  }, []);

  return (
    <>
      {loading && <p>Loading...</p>}
      <TopPlayersTable players={players} lastUpdated={lastUpdated} />
    </>
  );
}

export default App;

import { Player } from "types/PlayerType";
import "./App.css";
import { TopPlayersTable } from "./components/Table";
import { useState, useEffect } from "react";

const mockPlayers: Player[] = [
  { id: "1", nickname: "Player1", score: 1000 },
  { id: "2", nickname: "Player2", score: 950 },
  { id: "3", nickname: "Player3", score: 900 },
  { id: "4", nickname: "Player4", score: 850 },
  { id: "5", nickname: "Player5", score: 800 },
  { id: "6", nickname: "Player6", score: 750 },
  { id: "7", nickname: "Player7", score: 700 },
  { id: "8", nickname: "Player8", score: 650 },
  { id: "9", nickname: "Player9", score: 600 },
  { id: "10", nickname: "Player10", score: 550 },
];

const mockLastUpdated = "2023-06-09T10:30:00Z";

// async function fetchPlayers(): Promise<Player[]> {
//   const response = await fetch("/api/players");
//   const data = await response.json();
//   return data;
// }

function App() {
  const [players, setPlayers] = useState<Player[]>(mockPlayers || []);
  const [lastUpdated, setLastUpdated] = useState<string>("");

  // async function updatePlayers() {
  //   const updatedPlayers = await fetchPlayers();
  //   setPlayers(updatedPlayers);
  //   setLastUpdated(new Date().toISOString());
  // }

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     updatePlayers();
  //   }, 10000);

  //   return () => {
  //     clearInterval(interval);
  //   };
  // }, []);

  return (
    <>
      <TopPlayersTable players={players} lastUpdated={lastUpdated} />
    </>
  );
}

export default App;

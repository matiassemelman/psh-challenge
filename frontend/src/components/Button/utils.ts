import { Player } from "@/types";

// fetch API data
export function handleDownloadCSV(players: Player[]) {
  const headers = Object.keys(players[0]).toString();
  const body = players.map((player: Player) => {
    return Object.values(player).toString();
  });
  [headers, ...body].join("\n");

  startDownload();
}

function startDownload() {
  console.log("hola");
}

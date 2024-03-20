import { Player } from "@/types";

// fetch API data
export function handleDownloadCSV(players: Player[]) {
  const headers = Object.keys(players[0]).toString();
  const body = players.map((player: Player) => {
    return Object.values(player).toString();
  });
  const csv = [headers, ...body].join("\n");

  const blob = new Blob([csv], { type: "application/csv" });

  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.download = "players.csv";
  link.href = url;
  link.style.display = "none";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(url);
}

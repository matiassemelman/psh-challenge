import { Player } from "@/types";

// Function to handle downloading a CSV file from player data
export function handleDownloadCSV(players: Player[]) {
  // Convert the keys of the first player into a comma-separated string
  const headers = Object.keys(players[0]).toString();

  // Convert the values of each player into a comma-separated string
  const body = players.map((player: Player) => {
    return Object.values(player).toString();
  });

  // Join the headers and body of the CSV with line breaks
  const csv = [headers, ...body].join("\n");

  // Create a Blob object from the CSV
  const blob = new Blob([csv], { type: "application/csv" });

  // Create a URL for the Blob object
  const url = URL.createObjectURL(blob);

  // Create an <a> element to download the file
  const link = document.createElement("a");
  link.download = "players.csv";
  link.href = url;
  link.style.display = "none";

  // Add the <a> element to the document body
  document.body.appendChild(link);

  // Simulate a click on the link to initiate the download
  link.click();

  // Remove the <a> element from the document body
  link.remove();

  // Revoke the created URL to free up resources
  URL.revokeObjectURL(url);
}

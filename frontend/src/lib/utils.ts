import { Player } from "@/types/PlayerType";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fetchData(
  setPlayers: (players: Player[]) => void,
  setLastUpdated: (lastUpdated: string) => void
) {
  return fetch("http://localhost:3000/api/players/top")
    .then((response) =>
      response.json().then((data) => {
        setPlayers(data);
        const updatedAt = new Date(data[0].updatedAt);
        const formattedDate = updatedAt
          .toISOString()
          .slice(0, 16)
          .replace("T", " ");
        setLastUpdated(formattedDate);
      })
    )

    .catch((error) => {
      console.error("Error fetching top players:", error);
    });
}

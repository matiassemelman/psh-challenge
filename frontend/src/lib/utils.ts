import { Player } from "@/types/PlayerType";
import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function fetchPlayers(setPlayers: (players: Player[]) => void) {
  return fetch("http://localhost:3000/api/players/top")
    .then((response) =>
      response.json().then((data) => {
        console.log(data);
        setPlayers(data);
      })
    )

    .catch((error) => {
      console.error("Error fetching top players:", error);
    });
}

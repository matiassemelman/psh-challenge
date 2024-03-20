import { Player } from "@/types";
import { Button } from "../ui/button";
import { handleDownloadCSV } from "./utils";

export const ButtonCSV = ({ players }: { players: Player[] }) => {
  return (
    <Button variant={"default"} onClick={() => handleDownloadCSV(players)}>
      Download CSV
    </Button>
  );
};

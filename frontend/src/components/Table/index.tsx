import { Player } from "./../../../types/PlayerType";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableFooter,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

interface Props {
  players: Player[];
  lastUpdated: string;
}

export function TopPlayersTable({ players, lastUpdated }: Props) {
  return (
    <Table>
      <TableCaption>Top 10 Players by Score</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead>Rank</TableHead>
          <TableHead>Player</TableHead>
          <TableHead>Score</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {players.map((player, index) => (
          <TableRow key={player.id}>
            <TableCell className="font-medium">{index + 1}</TableCell>
            <TableCell>{player.nickname}</TableCell>
            <TableCell>{player.score}</TableCell>
          </TableRow>
        ))}
      </TableBody>
      <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Last Updated: {lastUpdated}</TableCell>
        </TableRow>
      </TableFooter>
    </Table>
  );
}

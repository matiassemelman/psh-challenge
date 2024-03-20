import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { TableProps } from "@/types";

export function TopPlayersTable({ players }: TableProps) {
  return (
    <div className="mt-3">
      <h1 className="pl-3 text-xl font-bold">Top 10 Players by Score</h1>

      <Table className="w-1/3">
        <TableHeader>
          <TableRow>
            <TableHead className="w-1/3">Rank</TableHead>
            <TableHead className="w-1/3">Player</TableHead>
            <TableHead className="w-1/3">Score</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {players.map((player, index) => (
            <TableRow key={player.id}>
              <TableCell className="w-1/3 font-medium">{index + 1}</TableCell>
              <TableCell className="w-1/3">{player.nickname}</TableCell>
              <TableCell className="w-1/3">{player.score}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

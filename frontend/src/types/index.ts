export interface Player {
  id: string;
  nickname: string;
  score: number;
}

export interface TableProps {
  players: Player[];
  lastUpdated: string;
}

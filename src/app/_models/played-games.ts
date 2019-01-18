
export class playedGames{
  totalPlayedGames: number;
  totalwins: number;
  averageRating: number;
  games: game[]  
}

class game{
    id: string;
    name: string;
    date: string;
}
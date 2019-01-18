export class designedGames{
  totalDesignedGames: number;
  totalPlayed: number;
  averageRating: number;
  games: game[]  
}

class game{
    id: number;
    name: string;
    date: string;
}

export class gameDetail {
    gameComments: comment[]
}

class comment{
    content: string;
    username: string;
}




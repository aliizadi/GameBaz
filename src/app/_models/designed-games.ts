export class designedGames{
  totalDesignedGames: number;
  totalPlayed: number;
  averageRating: number;
  games: game[]  
}

class game{
    id: string;
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




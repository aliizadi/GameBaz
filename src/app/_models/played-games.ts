
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

export class gameDetail {
    opponent: player
    gameDate: string;
    winner: player;
    gameComments: comment[]
    opponentComment: comment
}

class player { 
    id: string;
    firstName: string;
    lastName: string;
}

class comment{
    content: string;
    username: string;
}




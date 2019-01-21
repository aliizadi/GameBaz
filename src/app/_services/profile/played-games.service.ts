import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { playedGames } from '../../_models/played-games'
import { gameDetail } from '../../_models/played-games'


@Injectable({
  providedIn: 'root'
})
export class PlayedGamesService {

  constructor() { }

    getPlayedGames(): Observable<playedGames> {

      const PLAYEDGAMES: playedGames = {
        totalPlayedGames: 10,
        totalwins: 5,
        averageRating: 2.5,
        games: [
          {id: 'sff', name: 'bazi1', date: 'farda'},
          {id: 'asfa', name: 'bazi1', date: 'farda'}
        ]
      }

      return of(PLAYEDGAMES)
    }

    getGameDetail(id: string): Observable<gameDetail> {

      const GAMEDETAIL: gameDetail = {
        opponent: {id: 'hoseinhoseini', firstName: 'hosein', lastName: 'hoseini'},
        gameDate: 'dirooz',
        winner: {id: 'hoseinhoseini', firstName: 'hosein', lastName: 'hoseini'},
        gameComments: [{content: 'khooob', username: 'mamamad'}, {content: 'bad', username:'ali'}],
        opponentComment: {content: 'hey', username: 'alii'}
      }
      return of(GAMEDETAIL)
    }
}


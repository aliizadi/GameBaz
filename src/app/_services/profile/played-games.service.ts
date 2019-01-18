import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { playedGames } from '../../_models/played-games'

@Injectable({
  providedIn: 'root'
})
export class PlayedGamesService {

  constructor() { }

    getUserInformation(): Observable<playedGames> {
      const PLAYEDGAMES: playedGames = {
        totalPlayedGames: 10,
        totalwins: 5,
        averageRating: 2.5,
        games: [
          {id: 1, name: 'bazi1', data: 'farda'}
          {id: 1, name: 'bazi1', data: 'farda'}
        ]
      }

      return of(PLAYEDGAMES)
    }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { designedGames } from '../../_models/designed-games'
import { gameDetail } from '../../_models/designed-games'

@Injectable({
  providedIn: 'root'
})
export class DesignedGamesService {

  constructor() { }

 getDesignedGames(): Observable<designedGames> {

      const DESIGNEDGAMES: designedGames = {
        totalDesignedGames: 10,
        totalPlayed: 5,
        averageRating: 2.5,
        games: [
          {id: 1, name: 'bazi1', date: 'farda'},
          {id: 1, name: 'bazi1', date: 'farda'}
        ]
      }

      return of(DESIGNEDGAMES)
    }

  getGameDetail(id: number): Observable<gameDetail> {

    const GAMEDETAIL: gameDetail = {
          gameComments: [{content: 'khooob', username: 'mamamad'}, {content: 'bad', username:'ali'}]}

    return of(GAMEDETAIL)
  }
}

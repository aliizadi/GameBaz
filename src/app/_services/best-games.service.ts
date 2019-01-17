import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { game } from '../_models/game'

@Injectable({
  providedIn: 'root'
})
export class BestGamesService {

  constructor() { }

    getBestGames(): Observable<game[]> {
      const BESTGAMES: game[] = [
        { id: 1, name: 'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
        { id: 1, name: 'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
        { id: 1, name: 'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
        { id: 1, name: 'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
        { id: 1, name: 'bazi', maxScore: 100, resetNumbers: [2], Dices: 1, maxThrow: 6},
      ];
    
      return of(BESTGAMES)
    }
}

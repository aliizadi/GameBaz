import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { gameComment } from '../_models/game-comment'

@Injectable({
  providedIn: 'root'
})
export class GamesCommentsService {

  constructor() { }

   getGamesComments(): Observable<gameComment[]> {
      const GAMESCOMMENTS: gameComment[] = [
        { gameID: 1, gameName: 'bazi', content: 'bad', accepted: false},
        { gameID: 1, gameName: 'bazi', content: 'bad', accepted: false},
        { gameID: 1, gameName: 'bazi', content: 'bad', accepted: false},
        { gameID: 1, gameName: 'bazi', content: 'bad', accepted: false},
      ];
    
      return of(GAMESCOMMENTS)
    }
}

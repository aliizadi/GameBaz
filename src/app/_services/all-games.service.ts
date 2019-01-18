import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { game } from '../_models/all-games';

@Injectable({
  providedIn: 'root'
})
export class AllGamesService {

  constructor() { }

  getAllGames(): Observable<game[]> {
    const ALLGAMES: game[] = [
      {id: 1, averageRating: 3.5, totalPlaying: 10, designedDate: 'parsal', designer: {username: 'ali'}, totalPlayed: 20},
      {id: 1, averageRating: 3.5, totalPlaying: 10, designedDate: 'parsal', designer: {username: 'ali'}, totalPlayed: 20},
      {id: 1, averageRating: 3.5, totalPlaying: 10, designedDate: 'parsal', designer: {username: 'ali'}, totalPlayed: 20},
    ];
    
    return of(ALLGAMES)
  }
}





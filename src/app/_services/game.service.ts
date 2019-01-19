import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { game } from '../_models/game'


@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor() { }

  addHero (game: game): void {
  }
}

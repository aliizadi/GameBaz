import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { game } from '../_models/game'
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { throwError } from 'rxjs';



const API_URL = environment.apiUrl;


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
  })
};

@Injectable({
  providedIn: 'root'
})
export class MostOnlineGamesService {

  constructor(private http: HttpClient) { }

  getMostOnlineGames() {
    return this.http.get(API_URL + '/most-online-games', httpOptions)
      .pipe(
        catchError(error => {
            return throwError(error)
          }
        )
      )
  }
}

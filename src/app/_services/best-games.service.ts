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
export class BestGamesService {

  constructor(private http: HttpClient) { }

    getBestGames(){
      return this.http.get(API_URL + '/best-games', httpOptions)
      .pipe(
        catchError(error => {
            return throwError(error)
          }
        )
      )
    }
}

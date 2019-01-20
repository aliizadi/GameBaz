import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { gameComment } from '../_models/game-comment'
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
export class GamesCommentsService {

  constructor(private http: HttpClient) { }

   getGamesComments() {
      return this.http.get(API_URL + '/games-comments', httpOptions)
      .pipe(
        catchError(error => {
            return throwError(error)
          }
        )
      )
    }
}

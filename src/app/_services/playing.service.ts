import { Injectable } from '@angular/core';
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
export class PlayingService {
  gameId : string;
  constructor(private http: HttpClient) { }

  getGamesInfo(){
    return this.http.get(API_URL + '/game-info/'+this.gameId, httpOptions)
      .pipe(
        catchError(error => {
            return throwError(error)
          }
        )
      )
  }


}

export class game{
  name: string;
  maxScore: number;
  resetNumbers: number[];
  Dices: number;
  maxThrow: number;
}

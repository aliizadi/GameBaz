import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { throwError } from 'rxjs';

import { SessionService } from '../../_services/session.service';

import { designedGames } from '../../_models/designed-games'
import { gameDetail } from '../../_models/designed-games'

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class DesignedGamesService {

  constructor(private sessionService: SessionService,
              private http: HttpClient) { }

 getDesignedGames(){

      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': this.sessionService.name + ':'+ this.sessionService.accessToken
        })
      };

      return this.http.get(API_URL + '/designed-games', httpOptions)
      .pipe(
        catchError(error => {
            return throwError(error)
          }
        )
      )
    }

  getGameDetail(id: number){

   const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': this.sessionService.name + ':'+ this.sessionService.accessToken
        })
      };

      return this.http.get(API_URL + '/designed-game-detail/'+ id, httpOptions)
      .pipe(
        catchError(error => {
            return throwError(error)
          }
        )
      )
    
  }
}

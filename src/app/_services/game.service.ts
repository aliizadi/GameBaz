import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { SessionService } from '../_services/session.service';


import { game } from '../_models/game'

const API_URL = environment.apiUrl;


@Injectable({
  providedIn: 'root'
})
export class GameService {

  constructor(private http: HttpClient,
              private sessionService: SessionService) { }

  createGame (game: game){

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Authorization': this.sessionService.name + ':'+ this.sessionService.accessToken
      })
    };

    return this.http.post<game>(API_URL + '/create-game' , game, httpOptions)
    .pipe(
      catchError(error => error)
    );
  }
}

import { Injectable } from '@angular/core';
import { game } from '../_models/all-games';
import { Observable, of } from 'rxjs';
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
export class AllGamesService {

  constructor(private http: HttpClient) { }

  getAllGames(){
    return this.http.get(API_URL + '/all-games', httpOptions)
      .pipe(
        catchError(error => {
            return throwError(error)
          }
        )
      )
  }
}





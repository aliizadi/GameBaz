import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { onlineUser } from '../_models/online-user'
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
export class OnlineUsersService {

  constructor(private http: HttpClient) { }

  getOnlineUsers() {
    return this.http.get(API_URL + '/online-users', httpOptions)
      .pipe(
        catchError(error => {
            return throwError(error)
          }
        )
      )
  }
}

import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { userComment } from '../_models/user-comment'
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
export class UsersCommentsService {

  constructor(private http: HttpClient) { }

  getUsersComments(){
    return this.http.get(API_URL + '/users-comments', httpOptions)
      .pipe(
        catchError(error => {
            return throwError(error)
          }
        )
      )
  }
}

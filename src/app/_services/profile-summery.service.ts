import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { profileSummery } from '../_models/profile-summery'
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

export class ProfileSummeryService {

  constructor(private http: HttpClient) { }

 getProfileSummery() {
    return this.http.get(API_URL + '/profile-summery', httpOptions)
      .pipe(
        catchError(error => {
            return throwError(error)
          }
        )
      )
  }
}
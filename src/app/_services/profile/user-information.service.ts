import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../../environments/environment';
import { throwError } from 'rxjs';

import { userInformation } from '../../_models/user-information'
import { SessionService } from '../../_services/session.service';


const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  constructor(private http: HttpClient,
              private sessionService: SessionService) { }

    getUserInformation(){
      const httpOptions = {
        headers: new HttpHeaders({
          'Content-Type':  'application/json',
          'Authorization': this.sessionService.name + ':'+ this.sessionService.accessToken
        })
      };

      return this.http.get(API_URL + '/user-information', httpOptions)
      .pipe(
        catchError(error => {
            return throwError(error)
          }
        )
      )
    }
}



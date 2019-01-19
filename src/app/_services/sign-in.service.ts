import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const API_URL = environment.apiUrl;

@Injectable({
  providedIn: 'root'
})
export class SignInService {

  constructor(private http: HttpClient) { }

  signIn(username: string, password: string) {
    
    const SIGNIN: signIn = {username: username, password: password};

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    
    return this.http.post<signIn>(API_URL + '/sign-in' , SIGNIN, httpOptions)
    
    .pipe(
      catchError(error => error)
    );
  } 

}

class signIn {
  username: string;
  password: string;
}
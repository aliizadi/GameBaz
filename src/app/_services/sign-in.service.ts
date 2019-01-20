import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';

const API_URL = environment.apiUrl;


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};

@Injectable({
  providedIn: 'root'
})
export class SignInService {
  

  constructor(private http: HttpClient) { }

  signIn(username: string, password: string) {
    
    const SIGNIN: signIn = {username: username, password: password};

    
    return this.http.post<signIn>(API_URL + '/sign-in' , SIGNIN, httpOptions)
    
    .pipe(
      catchError(error => error)
    );
  } 

    signUp(user: signUp) {
    
    const SIGNUP: signUp = {username: user.username,
                            firstName: user.firstName,
                            lastName: user.lastName,
                            email: user.email,
                            birthday: user.birthday,
                            gender: user.gender,
                            password: user.password
                            };
    return this.http.post<signIn>(API_URL + '/sign-up' , SIGNUP, httpOptions)
    
    .pipe(
      catchError(error => error)
    );
  } 

}

export class signUp{
  username: string;
  firstName: string;
  lastName: string;
  email: string;
  birthday: string;
  gender: string;
  password: string;
}

class signIn {
  username: string;
  password: string;
}
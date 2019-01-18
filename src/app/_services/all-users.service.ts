import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { user } from '../_models/all-users'

@Injectable({
  providedIn: 'root'
})
export class AllUsersService {

  constructor() { }

  getAllUsers(): Observable<user[]> {
    const ALLUSERS: user[] = [
      {username: 'aliizadi', averageRating: 3.5, totalPlayed: 85, status: "online"},
      {username: 'hoseini', averageRating: 4.5, totalPlayed: 75, status: "offline"},
      {username: 'mammadi', averageRating: 2.5, totalPlayed: 95, status: "online"}
    ];
    
    return of(ALLUSERS)
  }
}

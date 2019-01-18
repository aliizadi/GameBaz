import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { profileSummery } from '../_models/profile-summery'

@Injectable({
  providedIn: 'root'
})

export class ProfileSummeryService {

  constructor() { }

 getProfileSummery(): Observable<profileSummery> {
    const PROFILESUMMERY: profileSummery = 
      { username: 'aliizadi', firstName: 'Ali', lastName: 'Izadi', email: 'Izadi@', playedGame: 1,
        wins: 2, averageRate: 2.5}
    
    return of(PROFILESUMMERY)
  }
}
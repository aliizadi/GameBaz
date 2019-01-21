import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { userInformation } from '../../_models/user-information'

@Injectable({
  providedIn: 'root'
})
export class UserInformationService {

  constructor() { }

    getUserInformation(): Observable<userInformation> {
      const USERINFORMATION: userInformation = 
      { username: 'rezarezaei', firstName: 'reza', lastName: 'rezaei', email:'a@a' , birthday: '1376', gender:"male"}

      return of(USERINFORMATION)
    }
}



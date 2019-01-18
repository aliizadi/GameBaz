import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { userComment } from '../_models/user-comment'

@Injectable({
  providedIn: 'root'
})
export class UsersCommentsService {

  constructor() { }

  getUsersComments(): Observable<userComment[]> {
    const USERSCOMMENTS: userComment[] = [
      { username: 'aminamini', firstName: 'amin', lastName: 'amini', content: 'good', accepted: false},
      { username: 'aminamini', firstName: 'amin', lastName: 'amini', content: 'good', accepted: false},
      { username: 'aminamini', firstName: 'amin', lastName: 'amini', content: 'good', accepted: false},
      { username: 'aminamini', firstName: 'amin', lastName: 'amini', content: 'good', accepted: false},
    ];
  
    return of(USERSCOMMENTS)
  }
}

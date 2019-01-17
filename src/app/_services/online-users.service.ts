import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { onlineUser } from '../_models/online-user'

@Injectable({
  providedIn: 'root'
})
export class OnlineUsersService {

  constructor() { }

  getOnlineUsers(): Observable<onlineUser[]> {
    const ONLINEUSERS: onlineUser[] = [
      { id: 'aliizadi', firstName: 'Ali', lastName: 'Izadi' },
      { id: 'aliizadi', firstName: 'Ali', lastName: 'Izadi' },
      { id: 'aliizadi', firstName: 'Ali', lastName: 'Izadi' },
      { id: 'aliizadi', firstName: 'Ali', lastName: 'Izadi' },
      { id: 'aliizadi', firstName: 'Ali', lastName: 'Izadi' },
      { id: 'aliizadi', firstName: 'Ali', lastName: 'Izadi' },
      { id: 'aliizadi', firstName: 'Ali', lastName: 'Izadi' },
      { id: 'aliizadi', firstName: 'Ali', lastName: 'Izadi' },
      { id: 'aliizadi', firstName: 'Ali', lastName: 'Izadi' },
    ];
    
    return of(ONLINEUSERS)
  }
}

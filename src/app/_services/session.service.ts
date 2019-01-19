import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SessionService {

  accessToken: string;
  name: string;

  constructor() { }

  destroy(): void {
    this.accessToken = null;
    this.name = null;
  }
}

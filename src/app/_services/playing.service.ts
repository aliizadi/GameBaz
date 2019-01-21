import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PlayingService {
  gameId : string;
  constructor() { }
}

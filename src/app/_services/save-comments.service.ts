import { Injectable } from '@angular/core';
import { game } from '../_models/all-games';
import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { environment } from '../../environments/environment';
import { throwError } from 'rxjs';
import { PlayingService } from '../_services/playing.service';


const API_URL = environment.apiUrl;


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json'
  })
};


@Injectable({
  providedIn: 'root'
})
export class SaveCommentsService {

  constructor(private http: HttpClient,
              private playingService: PlayingService) { }

  save(userComment, userRating, gameComment, gameRating) {
  
  const COMMENTS = {userComment: userComment,
                    userRating: userRating,
                    gameComment: gameComment, 
                    gameRating: gameRating};

  
  return this.http.post(API_URL + '/save-comments/' + this.playingService.gameId , COMMENTS, httpOptions)
  
  .pipe(
    catchError(error => error)
  );
  } 
}


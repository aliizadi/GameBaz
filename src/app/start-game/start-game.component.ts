import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder,FormArray, Validators, FormControl } from '@angular/forms';


// Components 
import { game } from '../_services/playing.service'

// Services
import { PlayingService } from '../_services/playing.service';
import { SaveCommentsService } from '../_services/save-comments.service';


@Component({
  selector: 'app-start-game',
  templateUrl: './start-game.component.html',
  styleUrls: ['./start-game.component.css']
})
export class StartGameComponent implements OnInit {

  isBusy = false;
  hasFailed = false;
  isComment = false;
  message: string;
  commentForm: FormGroup;

  gameRating: number = 3;
  userRating: number = 3; 


  finished: boolean;
  scores: number[];
  currentScore: number;
  turn: number;

  name_0: string;
  name_1: string;
  player0_score: number;
  player1_score: number;
  player0_current_dice: number;
  player1_current_dice: number;

  imgSrc: string;

  gameInfo: game;

  constructor(private playingService: PlayingService,
              private formBuilder: FormBuilder,
              private saveCommentsService: SaveCommentsService,
              private router: Router) {

      this.finished = false;
      this.scores = [0,0];
      this.currentScore = 0;
      this.turn = 0;
      this.name_0 = 'Player 0';
      this.name_1 = 'Player 1';
      this.player0_score = 0;
      this.player1_score = 0;
      this.player0_current_dice = 0;
      this.player1_current_dice = 0;
      this.imgSrc = '2'
   }

  ngOnInit() {
    this.getGameInfo();
    this.commentForm = this.formBuilder.group({
        GameComment: ['', Validators.required],
        UserComment: ['',Validators.required],
    });
  }


  onSubmit() {

    this.isBusy = true;
    this.hasFailed = false;

    this.saveCommentsService.save(
      this.commentForm.value.UserComment,
      this.userRating,
      this.commentForm.value.GameComment,
      this.gameRating
    )
        .subscribe(
        (response) => {
          this.message = response['message']
          this.isBusy = false;
          this.hasFailed = false;
          this.isComment = true;
          this.router.navigate(['/home']);

        },
        (error) => {
          this.isBusy = false;
          this.hasFailed = true;
        }
      );

  }

  getGameInfo(): void {
  this.playingService.getGamesInfo()
    .subscribe(gameInfo => {
      this.gameInfo = gameInfo['gameInfo']}
    )
  }

  roll(){

      var dice = Math.floor(Math.random() * 6) + 1;
      this.imgSrc = dice

      if( dice != 1){
        this.currentScore += dice;
        if(this.turn == 0)
          this.player0_current_dice = this.currentScore
        else if(this.turn == 1)
          this.player1_current_dice = this.currentScore
      }
      else if(dice == 1){
        this.nextPlayer()
      }
    
  }
  
  hold() {
    this.scores[this.turn]  += this.currentScore;
    if(this.turn == 0)
        this.player0_score = this.scores[0]
    else if(this.turn == 1)
       this.player1_score = this.scores[1]

    if(this.scores[this.turn] >= this.gameInfo.maxScore){
          if(this.turn == 0)
             this.name_0 = 'Winner'
          else if(this.turn == 1)
             this.name_1 = 'Winner'
          this.finished = true;
    }
    else{
      this.nextPlayer()
    }
  }


  private nextPlayer(){
      this.turn  ===0 ? this.turn  = 1 : this.turn  = 0;
      console.log(this.turn)
      this.currentScore = 0;
      this.player0_current_dice = 0;
      this.player1_current_dice = 0;
  }



}



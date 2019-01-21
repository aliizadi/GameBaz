import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// Components 
import { game } from '../_models/all-games'

// Services
import { AllGamesService } from '../_services/all-games.service';
import { PlayingService } from '../_services/playing.service';


@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  allGames: game[];

  constructor(private allGamesService: AllGamesService,
              private router: Router,
              private playingService: PlayingService) { }

  ngOnInit() {
    this.getAllGames();
  }

  getAllGames(): void {
    this.allGamesService.getAllGames()
      .subscribe(allGames => {
        console.log(allGames)
        this.allGames = allGames['allGames']}
      )
  }

  startGame(gameId: string): void { 
    console.log('ok')
    this.playingService.gameId = gameId;
    this.router.navigate(['/start-game']);
  }
}

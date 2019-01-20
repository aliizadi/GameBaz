import { Component, OnInit } from '@angular/core';
// Components 
import { game } from '../_models/all-games'

// Services
import { AllGamesService } from '../_services/all-games.service';

@Component({
  selector: 'app-games',
  templateUrl: './games.component.html',
  styleUrls: ['./games.component.css']
})
export class GamesComponent implements OnInit {

  allGames: game[];

  constructor(private allGamesService: AllGamesService) { }

  ngOnInit() {
    this.getAllGames();
  }

  getAllGames(): void {
    this.allGamesService.getAllGames()
      .subscribe(allGames => {
        this.allGames = allGames['allGames']}
      )
  }

  
  

}

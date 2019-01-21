import { Component, OnInit } from '@angular/core';

// Components 
import { userInformation } from '../_models/user-information'
import { playedGames } from '../_models/played-games'
import { designedGames } from '../_models/designed-games'

// Services
import { UserInformationService } from '../_services/profile/user-information.service';
import { PlayedGamesService } from '../_services/profile/played-games.service';
import { DesignedGamesService } from '../_services/profile/designed-games.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userInformation: userInformation;
  playedGames: playedGames;
  designedGames: designedGames;

  constructor(private userInformationService: UserInformationService,
              private playedGamesService: PlayedGamesService,
              private designedGamesService: DesignedGamesService) { }

  ngOnInit() {
    this.getUserInformation();
    this.getPlayedGames();
    this.getDesignedGames();
  }

  getUserInformation(): void {
    this.userInformationService.getUserInformation()
      .subscribe(userInformation => {
        console.log(userInformation)
        this.userInformation = userInformation})
  }

  getPlayedGames(): void {
    this.playedGamesService.getPlayedGames()
      .subscribe(playedGames => this.playedGames = playedGames)
  }
    
  getDesignedGames(): void {
    this.designedGamesService.getDesignedGames()
      .subscribe(designedGames =>{ 
        console.log(designedGames)
        this.designedGames = designedGames}
      )
  }

}

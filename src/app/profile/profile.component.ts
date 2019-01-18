import { Component, OnInit } from '@angular/core';

// Components 
import { userInformation } from '../_models/user-information'
import { playedGames } from '../_models/played-games'

// Services
import { UserInformationService } from '../_services/profile/user-information.service';
import { PlayedGamesService } from '../_services/profile/played-games.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  userInformation: userInformation;
  playedGamed: playedGames;

  constructor(private userInformationService: UserInformationService,
              private playedGamesService: PlayedGamesService) { }

  ngOnInit() {
    this.getUserInformation();
    this.getPlayedGames();
  }

  getUserInformation(): void {
    this.userInformationService.getUserInformation()
      .subscribe(userInformation => this.userInformation = userInformation)
  }

  getPlayedGames(): void {
    this.playedGamesService.getUserInformation()
      .subscribe(playedGames => this.playedGamed = playedGames)
  }
  

}

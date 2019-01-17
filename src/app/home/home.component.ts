import { Component, OnInit } from '@angular/core';
// Components 
import { onlineUser } from '../_models/online-user'
import { game } from '../_models/game'

// Services
import { OnlineUsersService } from '../_services/online-users.service';
import { BestGamesService } from '../_services/best-games.service';
import { BestNewGamesService } from '../_services/best-new-games.service';
import { MostOnlineGamesService } from '../_services/most-online-games.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  onlineUsers: onlineUser[]
  bestGames: game[]
  bestNewGames: game[]
  mostOnlineGames: game[]

  constructor(private onlineUsersService: OnlineUsersService,
              private bestGamesService: BestGamesService,
              private bestNewGamesService: BestNewGamesService,
              private mostOnlineGamesService: MostOnlineGamesService) { }

  ngOnInit() {
    this.getOnlineUsers();
    this.getBestGames();
    this.getMostOnlineGames();
    this.getBestNewGames();
  }

  getOnlineUsers(): void {
    this.onlineUsersService.getOnlineUsers()
      .subscribe(onlineUsers => this.onlineUsers = onlineUsers)
  }

  getBestGames(): void {
    this.bestGamesService.getBestGames()
      .subscribe(bestGames => this.bestGames = bestGames)
  }

  getBestNewGames(): void {
    this.bestNewGamesService.getBestNewGames()
      .subscribe(bestNewGames => this.bestNewGames = bestNewGames)
  }

  getMostOnlineGames(): void {
    this.mostOnlineGamesService.getMostOnlineGames()
      .subscribe(mostOnlineGames => this.mostOnlineGames = mostOnlineGames)
  }
}

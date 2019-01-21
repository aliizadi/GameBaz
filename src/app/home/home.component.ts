import { Component, OnInit } from '@angular/core';
// Components 
import { onlineUser } from '../_models/online-user'
import { game } from '../_models/game'
import { profileSummery } from '../_models/profile-summery'


// Services
import { OnlineUsersService } from '../_services/online-users.service';
import { BestGamesService } from '../_services/best-games.service';
import { BestNewGamesService } from '../_services/best-new-games.service';
import { MostOnlineGamesService } from '../_services/most-online-games.service';
import { ProfileSummeryService } from '../_services/profile-summery.service';
import { SessionService } from '../_services/session.service';
import { AuthService } from '../_services/auth.service';





@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  isSigned =  false;
  isAdmin = false;
  isUser = false;

  onlineUsers: onlineUser[];
  bestGames: game[];
  bestNewGames: game[];
  mostOnlineGames: game[];
  profileSummery: profileSummery;

  constructor(private onlineUsersService: OnlineUsersService,
              private bestGamesService: BestGamesService,
              private bestNewGamesService: BestNewGamesService,
              private mostOnlineGamesService: MostOnlineGamesService,
              private profileSummeryService: ProfileSummeryService,
              private sessionService: SessionService,
              private authService: AuthService) { }

  ngOnInit() {
    this.getOnlineUsers();
    this.getBestGames();
    this.getMostOnlineGames();
    this.getBestNewGames();
    this.getProfileSummery();
    this.isSigned = this.authService.isSignedIn()
    this.isAdmin = this.isSigned && this.sessionService.accessToken == 'admin'
    this.isUser = this.isSigned && this.sessionService.accessToken != 'admin'
  }

  ngOnChanges() {
    this.isSigned = this.authService.isSignedIn()
    this.isAdmin = this.isSigned && this.sessionService.accessToken == 'admin'
    this.isUser = this.isSigned && this.sessionService.accessToken != 'admin'
  }


  ngDoCheck() {
    this.isSigned = this.authService.isSignedIn()
    this.isAdmin = this.isSigned && this.sessionService.accessToken == 'admin'
    this.isUser = this.isSigned && this.sessionService.accessToken != 'admin'
  }

  getOnlineUsers(): void {
    this.onlineUsersService.getOnlineUsers()
      .subscribe(onlineUsers => this.onlineUsers = onlineUsers['onlineUsers'])
  }

  getBestGames(): void {
    this.bestGamesService.getBestGames()
      .subscribe(bestGames => this.bestGames = bestGames['bestGames'])
  }

  getBestNewGames(): void {
    this.bestNewGamesService.getBestNewGames()
      .subscribe(bestNewGames => this.bestNewGames = bestNewGames['bestNewGames'])
  }

  getMostOnlineGames(): void {
    this.mostOnlineGamesService.getMostOnlineGames()
      .subscribe(mostOnlineGames => this.mostOnlineGames = mostOnlineGames['mostOnlineGames'])
  }

  getProfileSummery(): void {
    this.profileSummeryService.getProfileSummery()
      .subscribe(profileSummery => this.profileSummery = profileSummery['profileSummery'])
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// Components 
import { gameDetail } from '../../_models/played-games'

// Services
import { PlayedGamesService } from '../../_services/profile/played-games.service';



@Component({
  selector: 'app-games-detail',
  templateUrl: './games-detail.component.html',
  styleUrls: ['./games-detail.component.css']
})
export class GamesDetailComponent implements OnInit {

  gameDetail: gameDetail;  

  constructor(private route: ActivatedRoute,
              private playedGamesService: PlayedGamesService,
              private location: Location) { }

  ngOnInit() {
    this.getGameDetail();
  }

  getGameDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.playedGamesService.getGameDetail(id)
      .subscribe(gameDetail => this.gameDetail = gameDetail);
  }

  goBack(): void {
    this.location.back();
  }

}
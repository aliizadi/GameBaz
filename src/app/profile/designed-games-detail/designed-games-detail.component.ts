import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// Components 
import { gameDetail } from '../../_models/designed-games'

// Services
import { DesignedGamesService } from '../../_services/profile/designed-games.service';

@Component({
  selector: 'app-designed-games-detail',
  templateUrl: './designed-games-detail.component.html',
  styleUrls: ['./designed-games-detail.component.css']
})
export class DesignedGamesDetailComponent implements OnInit {

  gameDetail: gameDetail;  

  constructor(private route: ActivatedRoute,
              private designedGamesService: DesignedGamesService,
              private location: Location) { }

  ngOnInit() {
    this.getGameDetail();
  }

  getGameDetail(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.designedGamesService.getGameDetail(id)
      .subscribe(gameDetail => this.gameDetail = gameDetail);
  }

  goBack(): void {
    this.location.back();
  }

}

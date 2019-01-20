import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// Component
import { gameComment } from '../../_models/game-comment'

// Service
import { GamesCommentsService } from '../../_services/games-comments.service';


@Component({
  selector: 'app-games-reviews',
  templateUrl: './games-reviews.component.html',
  styleUrls: ['./games-reviews.component.css']
})
export class GamesReviewsComponent implements OnInit {

  gamesComments: gameComment[];

  constructor(private route: ActivatedRoute,
              private heroService: GamesCommentsService,
              private location: Location) { }

  ngOnInit() {
    this.getGamesComments();
  }

  getGamesComments(): void {
    this.heroService.getGamesComments()
      .subscribe(gamesComments => this.gamesComments = gamesComments['gamesComments']);
  }

  goBack(): void {
    this.location.back();
  }
}

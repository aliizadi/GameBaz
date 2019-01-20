import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

// Component
import { userComment } from '../../_models/user-comment'

// Service
import { UsersCommentsService } from '../../_services/users-comments.service';

@Component({
  selector: 'app-users-reviews',
  templateUrl: './users-reviews.component.html',
  styleUrls: ['./users-reviews.component.css']
})
export class UsersReviewsComponent implements OnInit {

  usersComments: userComment[];
  constructor(private route: ActivatedRoute,
              private heroService: UsersCommentsService,
              private location: Location) { }

  ngOnInit() {
    this.getUsersComments();
  }

  getUsersComments(): void {
    this.heroService.getUsersComments()
      .subscribe(usersComments => this.usersComments = usersComments['usersComments']);
  }

  goBack(): void {
    this.location.back();
  }

}

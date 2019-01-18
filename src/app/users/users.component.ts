import { Component, OnInit } from '@angular/core';
// Components 
import { user } from '../_models/all-users'

// Services
import { AllUsersService } from '../_services/all-users.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  allUsers: user[];

  constructor(private allUsersService: AllUsersService) { }

  ngOnInit() {
    this.getAllUsers();
  }

  getAllUsers(): void {
    this.allUsersService.getAllUsers()
      .subscribe(allUsers => this.allUsers = allUsers)
  }

}

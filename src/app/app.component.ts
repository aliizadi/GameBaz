import { Component } from '@angular/core';
import { setTheme } from 'ngx-bootstrap/utils';

import { AuthService } from './_services/auth.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'GameBaz';
  isSigned = false
  constructor(private authService: AuthService) { }  

  ngOnInit() {
    this.isSigned = this.authService.isSignedIn()
  }

   ngOnChanges() {
     this.isSigned = this.authService.isSignedIn()
   }


    ngDoCheck() {
     this.isSigned = this.authService.isSignedIn()
   }

  doSignOut() {
    this.authService.doSignOut()
    this.isSigned = this.authService.isSignedIn()
  }
}

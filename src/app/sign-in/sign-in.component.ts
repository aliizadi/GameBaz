import { Component, OnInit } from '@angular/core';
import { SignInService } from '../_services/sign-in.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  signInForm: FormGroup;

  isBusy = false;
  hasFailed = false;
  showInputErrors = false;

  constructor(private signInService: SignInService,
              private authService: AuthService,
              private formBuilder: FormBuilder,
              private router: Router) { }

  ngOnInit() {
    this.signInForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  get f() { return this.signInForm.controls; }


  public doSignIn() {

    // Reset status
    this.isBusy = true;
    this.hasFailed = false;

    const username = this.signInForm.get('username').value;
    const password = this.signInForm.get('password').value;

    // Submit request to API
    this.signInService
      .signIn(username, password)
      .subscribe(
        (response) => {
          this.authService.doSignIn(
            response['token'],
            response['name']
          );
          this.router.navigate(['/hone']);
        },
        (error) => {
          this.isBusy = false;
          this.hasFailed = true;
        }
      );
  }


}

import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormArray, Validators, FormControl } from '@angular/forms';

import { signUp } from '../_services/sign-in.service'

import { SignInService } from '../_services/sign-in.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  signUpForm: FormGroup;
  isBusy = false;
  hasFailed = false;

  constructor(private formBuilder: FormBuilder,
              private signInService: SignInService) {

   }

  ngOnInit() {

    this.signUpForm = this.formBuilder.group({
        username: ['', Validators.required],
        firstName: ['',Validators.required],
        lastName: ['',Validators.required],
        email: ['',[Validators.email, Validators.required]],        
        password: ['',Validators.required],
        gender: new FormControl(''),
        birthday: ['',Validators.required],
    });
  }

  get f() { return this.signUpForm.controls; }

  onSubmit() {

     // Reset status
    this.isBusy = true;
    this.hasFailed = false;

    const USER: signUp = {
      username: this.signUpForm.value.username.value,
      firstName: this.signUpForm.value.firstName.value,
      lastName: this.signUpForm.value.lastName.value,
      email: this.signUpForm.value.email.value,
      password: this.signUpForm.value.password.value,
      gender: this.signUpForm.value.gender.value,
      birthday: this.signUpForm.value.birthday.value
    }

    this.signInService.signUp(USER)
        .subscribe(
        (response) => {
          this.isBusy = false;
          this.hasFailed = false;
        },
        (error) => {
          this.isBusy = false;
          this.hasFailed = true;
        }
      );

  }


}

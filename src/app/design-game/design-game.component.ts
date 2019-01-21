import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder,FormArray, Validators, FormControl } from '@angular/forms';

import { game } from '../_models/game'

import { GameService } from '../_services/game.service';



@Component({
  selector: 'app-design-game',
  templateUrl: './design-game.component.html',
  styleUrls: ['./design-game.component.css']
})
export class DesignGameComponent implements OnInit {
  
  designedForm: FormGroup;
  isCreated = false;
  message: string;

  constructor(private formBuilder: FormBuilder,
              private gameService: GameService) {

   }
  
  ngOnInit() {
  
    this.designedForm = this.formBuilder.group({
        name: ['', Validators.required],
        maxScore: ['', [Validators.required, Validators.pattern("^(0|[1-9][0-9]*)$")]],
        maxThrow: ['', [Validators.required, Validators.pattern("^(0|[1-9][0-9]*)$")]],
        dices: new FormControl(''),
        one: new FormControl(''),
        two: new FormControl(''),
        three: new FormControl(''),
        four: new FormControl(''),
        five: new FormControl(''),
        six: new FormControl('')      
    });
  }
  get f() { return this.designedForm.controls; }

  onSubmit() {

    var resetNumbers = []
    if (this.designedForm.value.one == true)
      resetNumbers.push(1)

    if (this.designedForm.value.two == true)
      resetNumbers.push(2)
    
    if (this.designedForm.value.three == true)
      resetNumbers.push(3)
    
    if (this.designedForm.value.four == true)
      resetNumbers.push(4)
    
    if (this.designedForm.value.five == true)
      resetNumbers.push(5)

    if (this.designedForm.value.six == true)
      resetNumbers.push(6)
    
    

    const GAME: game = {
      name: this.designedForm.value.name,
      maxScore: this.designedForm.value.maxScore,
      maxThrow: this.designedForm.value.maxScore,
      Dices: this.designedForm.value.dices,
      resetNumbers: resetNumbers,
    }

    this.gameService.createGame(GAME)
        .subscribe(
        (response) => {
          this.message = response['message']
          this.isCreated = true;
        },
        (error) => {
        }
      );
  }

}



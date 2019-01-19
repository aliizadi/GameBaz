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

  constructor(private formBuilder: FormBuilder,
              private gameService: GameService) {

   }
  
  ngOnInit() {
  
    this.designedForm = this.formBuilder.group({
        name: ['', Validators.required],
        maxScore: ['', [Validators.required, Validators.pattern("^(0|[1-9][0-9]*)$")]],
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


    // var dies = new arra
    

    // // var newGame: game = {id: -1, 
    // //                      name: this.designedForm.value.name.value,
    // //                      maxScore: this.designedForm.value.maxScore.value,
    // //                      resetNumbers: this.designedForm.valid}
    // this.gameService.addHero()
  }

}

// export class game{
//   id: number;
//   name: string;
//   maxScore: number;
//   resetNumbers: number[];
//   Dices: number;
//   maxThrow: number;
// }



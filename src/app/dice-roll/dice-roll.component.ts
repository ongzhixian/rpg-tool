import { Component, OnInit } from '@angular/core';
import { DiceOutcome, DiceRoll, DiceType } from '../rpg-models';

@Component({
  selector: 'app-dice-roll',
  templateUrl: './dice-roll.component.html',
  styleUrls: ['./dice-roll.component.css']
})
export class DiceRollComponent implements OnInit {

  selectedDiceType? : DiceType;

  diceCount: number;

  result : number;

  diceOutcomes : DiceOutcome[];

  outcomeTotal : number;

  diceTypes: DiceType[] = [
    { type: "4", description: "4-sided dice" },
    { type: "6", description: "6-sided dice" },
    { type: "8", description: "8-sided dice" },
    { type: "10", description: "10-sided dice" },
    { type: "12", description: "12-sided dice" },
    { type: "20", description: "20-sided dice" },
    { type: "100", description: "100-sided dice" }
  ]

  constructor() {
    this.result = 0;
    this.diceOutcomes = [];
    this.outcomeTotal = 0;
    this.diceCount = 2;
    this.selectedDiceType = this.diceTypes[1];
  }

  ngOnInit(): void {
  }

  onSelect(diceType : DiceType): void {
    this.selectedDiceType = diceType;
    console.log(this.selectedDiceType.description);
  }

  getResults(): void {

    // Reset outcomes
    this.outcomeTotal = 0;
    this.diceOutcomes.length = 0;

    if (this.selectedDiceType && this.selectedDiceType.type) {

      let sides = parseInt(this.selectedDiceType?.type, 10);
  
      for (let i = 0; i < this.diceCount; i++) {

        let outcome = this.randomInteger(1, sides);
        this.outcomeTotal = this.outcomeTotal + outcome;

        this.diceOutcomes.push({
          diceType : this.selectedDiceType,
          outcome : this.randomInteger(1, sides)
        });

        console.log(`Dice type [d${this.selectedDiceType.type}], outcome [${outcome}], total [${this.outcomeTotal}]`);
      }
    }
    
    console.log(`Final result of [${this.diceCount}d${this.selectedDiceType?.type}] is [${this.outcomeTotal}]`);
    
  }

  randomInteger(min : number, max : number) : number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

}

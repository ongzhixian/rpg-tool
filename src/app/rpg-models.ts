export interface DiceRoll {
    diceCount : number;
    diceType : DiceType;
}

export interface DiceType {
    type : string;
    description : string;
}

export interface DiceOutcome {
    diceType : DiceType;
    outcome : number;
}

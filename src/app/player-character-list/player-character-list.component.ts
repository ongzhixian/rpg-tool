import { Component, OnInit } from '@angular/core';
import { IHero } from '../IHero';

import { PlayerCharacterService } from '../player-character.service'
import { MessageService } from '../message.service'

@Component({
    selector: 'app-player-character-list',
    templateUrl: './player-character-list.component.html',
    styleUrls: ['./player-character-list.component.css']
})
export class PlayerCharacterListComponent implements OnInit {

    heroes: IHero[] = [];

    selectedHero?: IHero;

    constructor(
        private playerCharacterService : PlayerCharacterService,
        private messageService : MessageService) { }

    ngOnInit(): void {
        this.getHeroes();
    }

    getHeroes(): void {
        this.playerCharacterService.getHeroes()
            .subscribe(heroes => this.heroes = heroes);
    }

    onSelect(hero: IHero): void {
        this.selectedHero = hero;
        this.messageService.add(`HeroesComponent: Selected hero id=${hero.id}`);
    }
}

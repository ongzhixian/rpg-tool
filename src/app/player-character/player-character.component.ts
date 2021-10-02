import { Component, OnInit, Input } from '@angular/core';
import { IHero } from '../IHero'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { PlayerCharacterService } from '../player-character.service'


@Component({
    selector: 'app-player-character',
    templateUrl: './player-character.component.html',
    styleUrls: ['./player-character.component.css']
})
export class PlayerCharacterComponent implements OnInit {

    @Input() hero?: IHero;

    constructor(
        private route: ActivatedRoute,
        private heroService: PlayerCharacterService,
        private location: Location
    ) { }

    ngOnInit(): void {
        this.getHero();
    }

    getHero(): void {
        const id = Number(this.route.snapshot.paramMap.get('id'));
        this.heroService.getHero(id)
          .subscribe(hero => this.hero = hero);
    }

    goBack(): void {
        this.location.back();
    }
}

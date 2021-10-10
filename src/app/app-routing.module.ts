import { NgModule } from '@angular/core';
import { Router, RouterModule, Routes } from '@angular/router';
import { PlayerCharacterListComponent } from './player-character-list/player-character-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerCharacterComponent } from './player-character/player-character.component'
import { DiceRollComponent } from './dice-roll/dice-roll.component'

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'heroes', component: PlayerCharacterListComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'dice-roll', component: DiceRollComponent },
    { path: 'detail/:id', component: PlayerCharacterComponent }
];


@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }

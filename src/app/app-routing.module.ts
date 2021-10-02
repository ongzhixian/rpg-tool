import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
//import { HeroesComponent } from './heroes/heroes.component';
import { PlayerCharacterListComponent } from './player-character-list/player-character-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PlayerCharacterComponent } from './player-character/player-character.component'

const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'heroes', component: PlayerCharacterListComponent },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'detail/:id', component: PlayerCharacterComponent }
];


@NgModule({
    declarations: [],
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]

})
export class AppRoutingModule { }

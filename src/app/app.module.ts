import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { PlayerCharacterComponent } from './player-character/player-character.component';
import { PlayerCharacterListComponent } from './player-character-list/player-character-list.component';
import { MessageListComponent } from './message-list/message-list.component';
import { AppRoutingModule } from './app-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { DiceRollComponent } from './dice-roll/dice-roll.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MessageListComponent,
    PlayerCharacterComponent,
    PlayerCharacterListComponent,
    DiceRollComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

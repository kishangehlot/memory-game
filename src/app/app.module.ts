import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CardTwelveGameComponent } from './twelve-cards/twelve-cards.component';
import { GamePageComponent } from './game-page/game-page.component';
import { SixCardsComponent } from './six-cards/six-cards.component';

@NgModule({
  declarations: [
    AppComponent,
    CardTwelveGameComponent,
    GamePageComponent,
    SixCardsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

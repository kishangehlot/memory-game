import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GamePageComponent } from './game-page/game-page.component';
import { SixCardsComponent } from './six-cards/six-cards.component';
import { CardTwelveGameComponent } from './twelve-cards/twelve-cards.component';

const routes: Routes = [
  {path:'', component: GamePageComponent},
  {path:'six-cards', component: SixCardsComponent},
  {path: 'twelve-cards', component: CardTwelveGameComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }

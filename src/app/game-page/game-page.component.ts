import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-game-page',
  templateUrl: './game-page.component.html',
  styleUrl: './game-page.component.scss'
})
export class GamePageComponent {
  constructor(private router: Router) {}

  goToCardGame() {
    this.router.navigate(['/six-cards']);
  }

  goToCardTwelveGame() {
    this.router.navigate(['/twekve-cards']);
  }
}

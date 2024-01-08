import { Component } from '@angular/core';

interface Card {
  image: string;
  flipped: boolean;
  matched: boolean;
}

@Component({
  selector: 'app-card-twelve-game',
  templateUrl: './twelve-cards.component.html',
  styleUrl: './twelve-cards.component.scss'
})


export class CardTwelveGameComponent {
  cards: Card[] = [
    { image: './../assets/red.jpg', flipped: false, matched: false },
    { image: './../assets/green.jpg', flipped: false, matched: false },
    { image: './../assets/yellow.jpg', flipped: false, matched: false },
    { image: './../assets/blue.jpg', flipped: false, matched: false },
    { image: './../assets/red.jpg', flipped: false, matched: false },
    { image: './../assets/green.jpg', flipped: false, matched: false },
    { image: './../assets/white.png', flipped: false, matched: false },
    { image: './../assets/brown.jpg', flipped: false, matched: false },
    { image: './../assets/yellow.jpg', flipped: false, matched: false },
    { image: './../assets/blue.jpg', flipped: false, matched: false },
    { image: './../assets/white.png', flipped: false, matched: false },
    { image: './../assets/brown.jpg', flipped: false, matched: false },
  ];
  totalMoves: number = 0;
  successMoves: number = 0;
  accuracy: number = 0;

  flippedCards: Card[] = [];
  isFlipping: boolean = false;

  flipCard(card: Card) {
    if (!this.isFlipping && !card.flipped && this.flippedCards.length < 2) {
      card.flipped = true;
      this.flippedCards.push(card);

      if (this.flippedCards.length === 2) {
        this.totalMoves = this.totalMoves + 1;
        this.accuracy = (this.successMoves/this.totalMoves)*100;
        this.isFlipping = true;
        setTimeout(() => {
          this.checkMatch();
          this.isFlipping = false;
        }, 2000);
      }
    }
  }

  checkMatch() {
    if (this.flippedCards[0].image === this.flippedCards[1].image) {
      this.flippedCards.forEach(card => (card.matched = true));
      this.successMoves = this.successMoves + 1;
      this.accuracy = (this.successMoves/this.totalMoves)*100;
    } else {
      this.flippedCards.forEach(card => (card.flipped = false));
    }

    this.flippedCards = [];
  }
}

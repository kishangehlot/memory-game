import { Component } from '@angular/core';

interface Card {
  image: string;
  flipped: boolean;
  matched: boolean;
}

@Component({
  selector: 'app-card-game',
  templateUrl: './six-cards.component.html',
  styleUrls: ['./six-cards.component.scss']
})
export class SixCardsComponent {
  cards: Card[] = [
    { image: './../assets/red.jpg', flipped: false, matched: false },
    { image: './../assets/green.jpg', flipped: false, matched: false },
    { image: './../assets/yellow.jpg', flipped: false, matched: false },
    { image: './../assets/red.jpg', flipped: false, matched: false },
    { image: './../assets/green.jpg', flipped: false, matched: false },
    { image: './../assets/yellow.jpg', flipped: false, matched: false },
  ];

  // totalCards: number = this.cards.length;
  // flippedCards: Card[] = [];
  // isFlipping: boolean = false;
  totalMoves: number = 0;
  successMoves: number = 0;
  accuracy: number = 0;
  // roundsPlayed: number = 0 ;

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
        }, 1000);
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

import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardTwelveGameComponent } from './twelve-cards.component';


describe('TwelveCardsComponent', () => {
  let component: CardTwelveGameComponent;
  let fixture: ComponentFixture<CardTwelveGameComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CardTwelveGameComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(CardTwelveGameComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

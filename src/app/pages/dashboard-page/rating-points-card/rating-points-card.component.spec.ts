import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RatingPointsCardComponent } from './rating-points-card.component';

describe('RatingPointsCardComponent', () => {
  let component: RatingPointsCardComponent;
  let fixture: ComponentFixture<RatingPointsCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RatingPointsCardComponent]
    });
    fixture = TestBed.createComponent(RatingPointsCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

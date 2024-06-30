import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalValueCardComponent } from './total-value-card.component';

describe('TotalValueCardComponent', () => {
  let component: TotalValueCardComponent;
  let fixture: ComponentFixture<TotalValueCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalValueCardComponent]
    });
    fixture = TestBed.createComponent(TotalValueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

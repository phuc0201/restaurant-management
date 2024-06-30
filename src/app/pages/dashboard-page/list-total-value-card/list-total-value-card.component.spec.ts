import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTotalValueCardComponent } from './list-total-value-card.component';

describe('ListTotalValueCardComponent', () => {
  let component: ListTotalValueCardComponent;
  let fixture: ComponentFixture<ListTotalValueCardComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListTotalValueCardComponent]
    });
    fixture = TestBed.createComponent(ListTotalValueCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

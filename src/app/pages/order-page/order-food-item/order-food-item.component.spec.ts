import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFoodItemComponent } from './order-food-item.component';

describe('OrderFoodItemComponent', () => {
  let component: OrderFoodItemComponent;
  let fixture: ComponentFixture<OrderFoodItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [OrderFoodItemComponent]
    });
    fixture = TestBed.createComponent(OrderFoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

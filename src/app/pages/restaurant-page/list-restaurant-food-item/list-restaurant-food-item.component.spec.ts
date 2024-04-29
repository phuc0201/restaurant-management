import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListRestaurantFoodItemComponent } from './list-restaurant-food-item.component';

describe('ListRestaurantFoodItemComponent', () => {
  let component: ListRestaurantFoodItemComponent;
  let fixture: ComponentFixture<ListRestaurantFoodItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListRestaurantFoodItemComponent]
    });
    fixture = TestBed.createComponent(ListRestaurantFoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

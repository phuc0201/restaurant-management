import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantProfileComponent } from './restaurant-profile.component';

describe('RestaurantProfileComponent', () => {
  let component: RestaurantProfileComponent;
  let fixture: ComponentFixture<RestaurantProfileComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantProfileComponent]
    });
    fixture = TestBed.createComponent(RestaurantProfileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RestaurantContentComponent } from './restaurant-content.component';

describe('RestaurantContentComponent', () => {
  let component: RestaurantContentComponent;
  let fixture: ComponentFixture<RestaurantContentComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RestaurantContentComponent]
    });
    fixture = TestBed.createComponent(RestaurantContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

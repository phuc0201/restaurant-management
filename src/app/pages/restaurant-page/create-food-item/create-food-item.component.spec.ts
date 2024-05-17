import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateFoodItemComponent } from './create-food-item.component';

describe('CreateFoodItemComponent', () => {
  let component: CreateFoodItemComponent;
  let fixture: ComponentFixture<CreateFoodItemComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CreateFoodItemComponent]
    });
    fixture = TestBed.createComponent(CreateFoodItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

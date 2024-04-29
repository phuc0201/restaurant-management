import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormFoodDetailsComponent } from './form-food-details.component';

describe('FormFoodDetailsComponent', () => {
  let component: FormFoodDetailsComponent;
  let fixture: ComponentFixture<FormFoodDetailsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormFoodDetailsComponent]
    });
    fixture = TestBed.createComponent(FormFoodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});

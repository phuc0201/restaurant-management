import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CreateFoodItemDTO } from 'src/app/core/models/restaurant/food_item.model';
import { IModifierGroupsDTO } from 'src/app/core/models/restaurant/modifier-groups.mode';
import { IModifierDTO } from 'src/app/core/models/restaurant/modifier.model';

@Component({
  selector: 'app-form-food-details',
  templateUrl: './form-food-details.component.html',
  styleUrls: ['./form-food-details.component.scss']
})
export class FormFoodDetailsComponent implements OnInit, OnChanges {
  @Input() foodDetails: CreateFoodItemDTO = {
    category_id: '',
    name: '',
    price: 0,
    bio: '',
    modifier_groups: []
  };
  @Output() foodDetailsChange = new EventEmitter<CreateFoodItemDTO>();
  modifierGroup: IModifierGroupsDTO = {
    name: '',
    min: 0,
    max: 1,
    modifier: []
  };
  quantityModifiers: number = 0;
  foodBio?: string;
  loading = false;
  foodImage?: string;
  form!: FormGroup;
  formModifier!: FormGroup;
  listOfControl: Array<{ id: number; controlInstance: string; }> = [];
  isVisibleModifierGrs = false;
  constructor() { }

  showModal(): void {
    this.quantityModifiers = 0;
    this.isVisibleModifierGrs = true;
  }

  resetModifierGrpModal(): void {
    this.modifierGroup = {
      name: '',
      min: 0,
      max: 1,
      modifier: []
    };;
  }

  handleCreateModifiler(): void {
    if (this.modifierGroup.min >= 0
      && this.modifierGroup.max > 0
      && this.modifierGroup.name.trim() != ''
      && this.quantityModifiers > 0) {
      for (let i = 0; i < this.quantityModifiers; i++) {
        let modifier = {
          name: '',
          price: 0
        } as IModifierDTO;
        this.modifierGroup.modifier.push(modifier);
      }
      this.foodDetails.modifier_groups.push(this.modifierGroup);
      this.isVisibleModifierGrs = false;
      this.resetModifierGrpModal();
    }
  }

  handleCancel(): void {
    this.isVisibleModifierGrs = false;
    this.resetModifierGrpModal();
  }

  uploadImage(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.foodImage = e.target.result as string;
    };
    reader.readAsDataURL(file);
    this.foodDetails.image = file;
  }

  removeModifier(mdIndex: number, mgrIndex: number): void {
    this.quantityModifiers--;
    if (this.quantityModifiers <= 0) {
      this.foodDetails.modifier_groups.splice(mgrIndex, 1);
    } else {
      this.foodDetails.modifier_groups[mgrIndex].modifier.splice(mdIndex, 1);
    }
  }

  removeModifierGroup(index: number): void {
    this.foodDetails.modifier_groups.splice(index, 1);
  }

  ngOnInit(): void {

  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}

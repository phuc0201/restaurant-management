import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { CreateFoodItemDTO } from 'src/app/core/models/restaurant/food-items.model';
import { ModifierGroupsDTO } from 'src/app/core/models/restaurant/modifier-groups.model';
import { Modifier, ModifierDTO } from 'src/app/core/models/restaurant/modifier.model';
import { RestaurantCategory } from 'src/app/core/models/restaurant/restaurant-category.model';
import { RestaurantService } from 'src/app/core/services/restaurant.service';

@Component({
  selector: 'app-form-food-details',
  templateUrl: './form-food-details.component.html',
  styleUrls: ['./form-food-details.component.scss']
})
export class FormFoodDetailsComponent implements OnInit, OnChanges {
  @Input() foodItemDTO = new CreateFoodItemDTO();
  @Output() foodItemDTOChange = new EventEmitter<CreateFoodItemDTO>();
  @Input() isUpdateFoodItem: boolean = false;
  quantityModifiers: number = 0;
  categories: RestaurantCategory<string>[] = [];
  categorySelected: string = '';
  indexModifierGrpSelected: number = -1;
  modifierGroupForm = new ModifierGroupsDTO();
  foodBio?: string;
  loading = false;
  foodImage: string = '';
  form!: FormGroup;
  formModifier!: FormGroup;
  listOfControl: Array<{ id: number; controlInstance: string; }> = [];
  isVisibleModifierGrs = false;
  isUpdateMdGrp: boolean = false;

  showModal(): void {
    this.isVisibleModifierGrs = true;
  }

  updateModifierGrp(index: number) {
    this.indexModifierGrpSelected = index;
    this.isUpdateMdGrp = true;
    this.modifierGroupForm = { ...this.foodItemDTO.modifier_groups[index] };
    this.showModal();
  }

  handleSaveModifierGroup(): void {
    if (this.isUpdateMdGrp) {
      this.foodItemDTO.modifier_groups[this.indexModifierGrpSelected] = this.modifierGroupForm;
    }
    else if (this.modifierGroupForm.min >= 0
      && this.modifierGroupForm.max > 0
      && this.modifierGroupForm.name.trim() != ''
      && this.quantityModifiers > 0) {
      for (let i = 0; i < this.quantityModifiers; i++) {
        let modifier = {
          name: '',
          price: 0
        } as Modifier;
        this.modifierGroupForm.modifier.push(modifier);
      }
      this.foodItemDTO.modifier_groups.push(this.modifierGroupForm);
    }
    this.handleClose();
  }

  handleClose(): void {
    this.isVisibleModifierGrs = false;
    this.isUpdateMdGrp = false;
    this.indexModifierGrpSelected = -1;
    this.quantityModifiers = 0;
    this.modifierGroupForm = new ModifierGroupsDTO();
  }

  addModifier(modifierGr: ModifierGroupsDTO) {
    const modifier = new ModifierDTO();
    modifierGr.modifier.push(modifier);
  }

  uploadImage(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.foodImage = e.target.result as string;
    };
    reader.readAsDataURL(file);
    this.foodItemDTO.image = file;
  }

  removeModifier(mdIndex: number, mgrIndex: number): void {
    if (this.foodItemDTO.modifier_groups[mgrIndex].modifier.length <= 1) {
      this.foodItemDTO.modifier_groups.splice(mgrIndex, 1);
    } else {
      this.foodItemDTO.modifier_groups[mgrIndex].modifier.splice(mdIndex, 1);
    }
  }

  removeModifierGroup(index: number): void {
    this.foodItemDTO.modifier_groups.splice(index, 1);
  }

  ngOnInit(): void {
    this.resSrv.getCategories().subscribe(data => {
      this.categories = data;
      if (this.foodItemDTO.category_id === '') {
        this.foodItemDTO.category_id = data[0]._id;
      }
    });
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

  constructor(
    private resSrv: RestaurantService,
  ) { }
}

import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { CreateFoodItemDTO } from 'src/app/core/models/restaurant/food-items.model';
import { ModifierGroupsDTO } from 'src/app/core/models/restaurant/modifier-groups.model';
import { Modifier, ModifierDTO } from 'src/app/core/models/restaurant/modifier.model';
import { RestaurantCategory } from 'src/app/core/models/restaurant/restaurant-category.model';
import { ReviewFoodItem } from 'src/app/core/models/restaurant/reviews.mode';
import { FormatService } from 'src/app/core/services/common/format.serive';
import { RestaurantService } from 'src/app/core/services/restaurant.service';
import { ReviewService } from 'src/app/core/services/review.service';

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
  reviews: ReviewFoodItem[] = [];

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
    const file: File = event.target.files[0];
    this.foodItemDTO.fileImage = file;
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.foodImage = e.target.result as string;
    };
    reader.readAsDataURL(file);
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

  formatDate(date: string): string {
    return this.formatService.formatDate(date);
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') as string;
    if (id) {
      this.reviewSrv.getReviewForFoodItem(id).subscribe(data => {
        this.reviews = data;
        console.log(this.reviews);

      });
    }

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
    private formatService: FormatService,
    private reviewSrv: ReviewService,
    private route: ActivatedRoute
  ) { }
}

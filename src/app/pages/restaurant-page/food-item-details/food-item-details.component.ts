import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IFoodItem } from 'src/app/core/models/restaurant/food_item.model';
import { IModifierGroups } from 'src/app/core/models/restaurant/modifier-groups.mode';
import { IModifier } from 'src/app/core/models/restaurant/modifier.model';

@Component({
  selector: 'app-food-item-details',
  templateUrl: './food-item-details.component.html',
  styleUrls: ['./food-item-details.component.scss']
})
export class FoodItemDetailsComponent implements OnChanges, OnInit {
  @Input() foodDetails: IFoodItem = {
    id: '',
    name: '',
    price: 0,
    bio: '',
    image: '',
    modifier_groups: []
  };
  @Input() openModal: boolean = false;
  @Output() openModalChange = new EventEmitter<boolean>();
  foodBio?: string;
  loading = false;
  foodImage?: string;
  form!: FormGroup;
  formModifier!: FormGroup;
  listOfControl: Array<{ id: number; controlInstance: string; }> = [];
  isVisible = false;
  constructor(
    private fb: FormBuilder,
    // private route: ActivatedRoute
  ) { }

  showModal(): void {
    this.isVisible = true;
  }

  handleOk(): void {
    console.log('Button ok clicked!');
    this.isVisible = false;
  }

  handleCancel(): void {
    console.log('Button cancel clicked!');
    this.isVisible = false;
  }

  createForm(data: IFoodItem): void {
    this.foodBio = data.bio;
    this.form = this.fb.group({
      id: [data.id],
      image: [data.image],
      price: [data.price],
      bio: [data.bio],
      name: [data.name, Validators.required],
      modifier_groups: this.fb.array(
        data.modifier_groups.map(item => this.createModifierGroup(item))
      )
    });
    console.log(this.form.value);

  }

  createModifierGroup(item: IModifierGroups): FormGroup {
    return this.fb.group({
      id: [item.id],
      name: [item.name],
      min: [item.min],
      max: [item.max],
      modifier: this.fb.array(
        item.modifier.map(mdf => this.createModifier(mdf))
      )
    });
  }

  createModifier(mdf: IModifier): FormGroup {
    return this.fb.group({
      id: [mdf.id],
      name: [mdf.name, Validators.required],
      price: [mdf.price]
    });
  }
  get modifierGroups(): FormArray {
    return this.form.get('modifier_groups') as FormArray;
  }

  getModifierControls(groupIndex: number): FormArray {
    const group = this.modifierGroups.at(groupIndex) as FormGroup;
    return group.get('modifier') as FormArray;
  }

  onSubmit() {
    console.log(this.form.value); // Dữ liệu form
  }

  uploadImage(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e: any) => {
      this.foodImage = e.target.result as string;
    };
    reader.readAsDataURL(file);
  }


  ngOnInit(): void {
    // if (this.route.snapshot.params['id']) {
    //   console.log(this.route.snapshot.params['id']);
    // }
  }

  ngOnChanges(changes: SimpleChanges): void {

  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CreateFoodItemDTO, FoodItems } from 'src/app/core/models/restaurant/food-items.model';
import { ModifierGroups } from 'src/app/core/models/restaurant/modifier-groups.model';
import { RestaurantService } from 'src/app/core/services/restaurant.service';

@Component({
  selector: 'app-food-item-details',
  templateUrl: './food-item-details.component.html',
  styleUrls: ['./food-item-details.component.scss']
})
export class FoodItemDetailsComponent implements OnInit {
  foodDetails = new FoodItems<ModifierGroups>();
  foodItemDTO = new CreateFoodItemDTO();
  categorySelected: string = '';

  updateFoodItem() {
    this.foodItemDTO._id = this.foodDetails._id;
    const { category_id, ...dto } = this.foodItemDTO;
    // console.log(dto);
    this.resSrv.updateFoodItem(dto).subscribe();
  }

  ngOnInit(): void {
    this.route.params.subscribe(data => {
      if (data["cateID"]) {
        this.categorySelected = data["cateID"];
      }
    });

    this.route.params.subscribe(param => {
      this.resSrv.getFoodDetails(param['id']).subscribe(data => {
        this.foodDetails = data;
        this.foodItemDTO.bio = data.bio;
        this.foodItemDTO.image = data.image;
        this.foodItemDTO.modifier_groups = data.modifier_groups;
        this.foodItemDTO.price = data.price;
        this.foodItemDTO.name = data.name;
        this.foodItemDTO.category_id = this.categorySelected;
      });
    });
  }

  constructor(
    private route: ActivatedRoute,
    private resSrv: RestaurantService
  ) { }
}

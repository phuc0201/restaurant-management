import { Component } from '@angular/core';
import { CreateFoodItemDTO } from 'src/app/core/models/restaurant/food-items.model';
import { RestaurantService } from 'src/app/core/services/restaurant.service';

@Component({
  selector: 'app-create-food-item',
  templateUrl: './create-food-item.component.html',
  styleUrls: ['./create-food-item.component.scss']
})
export class CreateFoodItemComponent {
  foodItemDTO = new CreateFoodItemDTO();

  create(): void {
    const { _id, ...dto } = this.foodItemDTO;
    this.resSrv.createFoodItem(dto).subscribe();
  }

  constructor(
    private resSrv: RestaurantService
  ) { }

}

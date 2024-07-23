import { Component, OnInit } from '@angular/core';
import { FoodItemPagination } from 'src/app/core/models/restaurant/food-items.model';
import { RestaurantService } from 'src/app/core/services/restaurant.service';

@Component({
  selector: 'app-top-products',
  templateUrl: './top-products.component.html',
  styleUrls: ['./top-products.component.scss']
})
export class TopProductsComponent implements OnInit {
  food = new FoodItemPagination();

  ngOnInit(): void {
    this.resSrv.getFoodItems(1, 5).subscribe({
      next: data => {
        this.food = data;
        console.log(data);

      }
    });
  }

  constructor(
    private resSrv: RestaurantService
  ) { }
}

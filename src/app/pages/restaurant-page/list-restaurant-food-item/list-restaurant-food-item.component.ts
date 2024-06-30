import { Component, OnInit } from '@angular/core';
import { FoodItems } from 'src/app/core/models/restaurant/food-items.model';
import { ModifierGroups } from 'src/app/core/models/restaurant/modifier-groups.model';
import { RestaurantCategory } from 'src/app/core/models/restaurant/restaurant-category.model';
import { FormatService } from 'src/app/core/services/common/format.serive';
import { RestaurantService } from 'src/app/core/services/restaurant.service';


@Component({
  selector: 'app-list-restaurant-food-item',
  templateUrl: './list-restaurant-food-item.component.html',
  styleUrls: ['./list-restaurant-food-item.component.scss']
})
export class ListRestaurantFoodItemComponent implements OnInit {
  showDetails: boolean = false;
  foodDetails = new FoodItems<ModifierGroups>;
  options: string[] = ['All'];
  menu: RestaurantCategory<FoodItems<string>>[] = [];
  isLoading: boolean = false;
  cateSelected: number = 0;

  formatDate(isoDate: string): string {
    return this.formatSrv.formatDate(isoDate);
  }

  loadMenu(): void {
    this.isLoading = true;
    this.resSrv.getMenu().subscribe({
      next: data => {
        this.options = ['All', ...data.map(cate => cate.name)];
        this.menu = data.map(cate => {
          cate.food_items.forEach(item => item.category_id = cate._id);
          return cate;
        });

        const allFoodItems = data.flatMap(cate => cate.food_items);
        const allItems = new RestaurantCategory<FoodItems<string>>();
        allItems.food_items = allFoodItems;

        this.menu.unshift(allItems);
      },
      complete: () => {
        setTimeout(() => {
          this.isLoading = false;
        }, 700);
      }
    });

  }

  handleCategoryChange(index: number): void {
    this.cateSelected = index;
  }

  get getFoodItemsByCategory() {
    return this.menu[this.cateSelected].food_items;
  }

  showFoodDetails(data: FoodItems<ModifierGroups>): void {
    this.showDetails = true;
    this.foodDetails = data;
  }

  deleteFoodItem(foodId: string, cateId: string) {
    this.resSrv.deleteFoodItem(foodId, cateId).subscribe({
      complete: () => {
        this.loadMenu();
      }
    });
  }


  ngOnInit(): void {
    this.loadMenu();
  }

  constructor(
    private resSrv: RestaurantService,
    private formatSrv: FormatService
  ) { }
}

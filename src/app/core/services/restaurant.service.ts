import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { URLConstant } from '../constants/url.constant';
import { CreateFoodItemDTO, FoodItemDTO, FoodItems } from '../models/restaurant/food-items.model';
import { ModifierGroups, ModifierGroupsDTO } from '../models/restaurant/modifier-groups.model';
import { RestaurantCategory, RestaurantCategoryDTO } from '../models/restaurant/restaurant-category.model';
import { Restaurant } from '../models/restaurant/restaurant.model';

@Injectable({
  providedIn: 'root'
})
export class RestaurantService {
  baseURL = URLConstant.API.END_POINT;
  private foodItem;
  foodItemSelected: Observable<CreateFoodItemDTO>;
  constructor(
    private http: HttpClient
  ) {
    this.foodItem = new BehaviorSubject<CreateFoodItemDTO>(new CreateFoodItemDTO());
    this.foodItemSelected = this.foodItem.asObservable();
  }

  getInfor(): Observable<Restaurant> {
    return this.http.get<Restaurant>(this.baseURL + URLConstant.API.RESTAURANT.INFO);
  }

  getMenu(): Observable<RestaurantCategory<FoodItems<string>>[]> {
    return this.http.get<RestaurantCategory<FoodItems<string>>[]>(this.baseURL + URLConstant.API.RESTAURANT.MENU);
  }

  changeRestaurantStatus(isOpened: boolean): void {
    localStorage.setItem('isOpened', JSON.stringify(isOpened));
  }

  createFoodItem(dto: CreateFoodItemDTO): Observable<FoodItems<ModifierGroups>> {
    return this.http.post<FoodItems<ModifierGroups>>(this.baseURL + URLConstant.API.RESTAURANT.CREATE_FOOD_ITEM, dto);
  }

  deleteFoodItem(foodId: string, cateId: string): Observable<FoodItems<string>> {
    return this.http.post<FoodItems<string>>(this.baseURL + `/restaurant/fooditem/delete`, {
      category_id: cateId,
      foodItem_id: foodId
    });
  }

  updateFoodItem(dto: FoodItemDTO<ModifierGroupsDTO>): Observable<FoodItemDTO<ModifierGroupsDTO>> {
    return this.http.patch<FoodItemDTO<ModifierGroupsDTO>>(this.baseURL + '/restaurant/fooditem/update', dto);
  }

  getFoodDetails(id: string): Observable<FoodItems<ModifierGroups>> {
    return this.http.get<FoodItems<ModifierGroups>>(this.baseURL + URLConstant.API.RESTAURANT.GET_FOOD_DETAILS + id);
  }

  getCategories(): Observable<RestaurantCategory<string>[]> {
    return this.http.get<RestaurantCategory<string>[]>(this.baseURL + URLConstant.API.RESTAURANT.CATEGORY.GET_LIST);
  }

  createCategory(dto: RestaurantCategoryDTO): Observable<RestaurantCategory<string>> {
    return this.http.post<RestaurantCategory<string>>(this.baseURL + URLConstant.API.RESTAURANT.CATEGORY.CREATE, dto);
  }

  updateCategory(dto: RestaurantCategoryDTO): Observable<RestaurantCategory<string>> {
    return this.http.patch<RestaurantCategory<string>>(this.baseURL + `/restaurant/category/${dto._id}/update`, dto);
  }

  deleteCategory(id: string): Observable<RestaurantCategory<string>> {
    return this.http.delete<RestaurantCategory<string>>(this.baseURL + `/restaurant/category/${id}/delete`);
  }


}

import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, exhaustMap, map, of } from "rxjs";
import { RestaurantService } from "../../services/restaurant.service";
import * as restuarantActions from './restaurant.actions';
@Injectable()
export class RestaurantEffects {
  constructor(
    private action$: Actions,
    private restaurantService: RestaurantService
  ) { }

  _getInforRequest = createEffect(() =>
    this.action$.pipe(
      ofType(restuarantActions.getInfor),
      exhaustMap(() => this.restaurantService.getInfor().pipe(
        map((data) => restuarantActions.getInfoSuccess({ info: data })),
        catchError(error => of(restuarantActions.getInfoFailure({ error: error })))
      ))
    )
  );
}

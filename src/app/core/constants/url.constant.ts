import { environment } from "src/environments/environment";

export const URLConstant = {
  API: {
    END_POINT: environment.serverTestUrl,
    AUTH: {
      SIGNIN: '/auth/restaurant/signin'
    },
    RESTAURANT: {
      PROFILE: '/restaurant/info',
      CREATE_FOOD_ITEM: '/restaurant/fooditem'
    }
  }
};

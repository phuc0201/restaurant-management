import { environment } from "src/environments/environment";

export const URLConstant = {
  API: {
    END_POINT: environment.serverTestUrl,
    AUTH: {
      SIGNIN: '/auth/restaurant/signin'
    },
    RESTAURANT: {
      INFO: '/restaurant/info',
      CREATE_FOOD_ITEM: '/restaurant/fooditem/create',
      MENU: '/restaurant/menu',
      GET_FOOD_DETAILS: '/restaurant/fooditem/',
      CATEGORY: {
        BASE: '/restaurant/category',
        GET_LIST: '/restaurant/category',
        CREATE: '/restaurant/category/create',
        UPDATE: '/update'
      },
    }
  }
};

import {
  getCollections,
  getRestauranteFiltro,
} from "../../services/getCollections";
import { restaurants } from "../../services/infoArrays";
import { restaurantsTypes } from "../types/restaurants";

const getRestaurants = (data) => {
  return {
    type: restaurantsTypes.GET_RESTAURANTS,
    payload: data,
  };
};

export const getRestaurantsAsync = () => {
  return async (dispatch) => {
    try {
      const coleccion = await getCollections("restaurants");
      dispatch(getRestaurants(coleccion));
    } catch (error) {
      console.log(error);
      dispatch(getRestaurants(restaurants));
    }
  };
};

const getRestaurant = (data) => {
  return {
    type: restaurantsTypes.GET_RESTAURANT,
    payload: data,
  };
};

export const getRestaurantAsync = (param) => {
  return async (dispatch) => {
    try {
      const coleccion = await getRestauranteFiltro("restaurants", param);
      dispatch(getRestaurant(coleccion));
    } catch (error) {
      dispatch(
        getRestaurant(restaurants.filter((res) => res.foods === Number(param)))
      );
    }
  };
};

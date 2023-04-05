import { restaurantsTypes } from "../types/restaurants";
const initialState = {
  restaurants: [],
  loading: false,
};

export const restaurantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case restaurantsTypes.GET_RESTAURANTS:
      return {
        ...state,
        restaurants: [...action.payload],
      };
    case restaurantsTypes.GET_RESTAURANT:
      return {
        ...state,
        restaurants: [...action.payload],
      };
    case restaurantsTypes.TOOGLE_LOADING:
      return {
        ...state,
        loading: true,
      };
    default:
      return initialState;
  }
};

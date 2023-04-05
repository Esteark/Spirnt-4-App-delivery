import { configureStore } from "@reduxjs/toolkit";
import { restaurantsReducer } from "../reducers/restaurantReducer";
import { userReducer } from "../reducers/userReducer";
const reducer = {
  restaurants: restaurantsReducer,
  user: userReducer,
};
const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== "production",
});

export default store;

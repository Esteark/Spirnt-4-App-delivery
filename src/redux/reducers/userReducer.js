import { userTypes } from "../types/userTypes";

const initialState = {
  name: "",
  email: "",
  error: false,
  islog: false,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case userTypes.CREATE_USER:
      return {
        ...state,
        name: action.payload.name,
        email: action.payload.email,
        error: action.payload.error,
        islog: action.payload.islog,
      };
    case userTypes.LOGIN_USER:
      return {
        ...action.payload,
      };
    case userTypes.LOGOUT_USER:
      return { ...initialState };
    default:
      return state;
  }
};

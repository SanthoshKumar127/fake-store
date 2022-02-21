import { ActionType } from "../constant/action-type";

const initialState = {
  products: "",
  error: null,
};

export default function productDetailsReducer(state = initialState, action) {
  switch (action.type) {
    case ActionType.GET_PRODUCT_DETAILS_REQUESTED:
      return {
        state,
      };
    case ActionType.GET_PRODUCT_DETAILS_SUCCESS:
      return {
        products: action.products.data,
      };
    case ActionType.GET_PRODUCT_DETAILS_FAILED:
      return {
        error: action.message,
      };
    default:
      return state;
  }
}

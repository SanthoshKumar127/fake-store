import { ActionType } from "../constant/action-type";

const initialState = {
  products: [],
  error: null,
};

export default function productListReducer(state = initialState, action) {
  console.log("Action Type", action);
  console.log("Action Data of Products", action.products);
  switch (action.type) {
    case ActionType.GET_PRODUCT_LIST_REQUESTED:
      return {
        state,
      };
    case ActionType.GET_PRODUCT_LIST_SUCCESS:
      return {
        products: action.products.data,
      };
    case ActionType.GET_PRODUCT_LIST_FAILED:
      return {
        error: action.message,
      };
    default:
      return state;
  }
}

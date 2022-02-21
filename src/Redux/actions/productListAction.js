import { ActionType } from "../constant/action-type";

export function productListAction() {
  console.log("Action Called");
  return {
    type: ActionType.GET_PRODUCT_LIST_REQUESTED,
  };
}

export function productDetailsAction({ productId }) {
  console.log(productId);
  return {
    type: ActionType.GET_PRODUCT_DETAILS_REQUESTED,
    products: { id: productId },
  };
}

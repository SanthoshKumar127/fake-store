import { combineReducers } from "redux";
import productListReducer from "./productReducer";
import productDetailsReducer from "./productDetailsReducer";

const rootReducer = combineReducers({
  products: productListReducer,
  productDetailsReducer,
});

export default rootReducer;

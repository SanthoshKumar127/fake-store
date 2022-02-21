import { all } from "redux-saga/effects";
import productListSaga from "./productSaga";
import getProductDetailsSaga from "./productDetailsSaga";

export default function* rootSaga() {
  yield all([productListSaga(), getProductDetailsSaga()]);
}

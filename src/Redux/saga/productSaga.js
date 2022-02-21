import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function getProductList() {
  return axios({
    method: "get",
    url: "https://fakestoreapi.com/products",
  });
}

function* fetchProductList(action) {
  try {
    const products = yield call(getProductList);

    yield put({ type: "GET_PRODUCT_LIST_SUCCESS", products: products });
  } catch (e) {
    yield put({ type: "GET_PRODUCT_LIST_FAILED", message: e.message });
  }
}

/*
  starts fetchProduct each dispatch 'GET_PRODUCT_LIST_REQUESTED' action
  Allows concurrent fetches of product
*/
function* productListSaga() {
  console.log("Saga productList");
  yield takeEvery("GET_PRODUCT_LIST_REQUESTED", fetchProductList);
}

export default productListSaga;

import { call, put, takeEvery } from "redux-saga/effects";
import axios from "axios";

function getProductDetails(products) {
  return axios({
    method: "get",
    url: `https://fakestoreapi.com/products/${products.id}`,
  });
}

function* fetchProductDetailsUsingProductId(action) {
  console.log("fetchProductDetailsUsingProductId", action);
  try {
    const productDetails = yield call(getProductDetails, action.products);
    yield put({
      type: "GET_PRODUCT_DETAILS_SUCCESS",
      products: productDetails,
    });
  } catch (e) {
    yield put({ type: "GET_PRODUCT_DETAILS_FAILED", message: e.message });
  }
}

function* getProductDetailsSaga() {
  yield takeEvery(
    "GET_PRODUCT_DETAILS_REQUESTED",
    fetchProductDetailsUsingProductId
  );
}

export default getProductDetailsSaga;

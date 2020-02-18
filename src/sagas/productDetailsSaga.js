
import { put, takeLatest, call } from 'redux-saga/effects';
import getProduct from '../api/productApi';
import { setProductDetails } from '../actions/productDetailsAction';

function* workerProductDetailsSaga({ payload }) {
  try {
    const response = yield call(getProduct, payload);
    const product = response&&response.data&&response.data.productList[0];
    yield put(
      setProductDetails(product)
    );
  } catch (err) {
    
  }
}

export default function* watchProductSaga() {
  yield takeLatest("GET_PRODUCT_DETAILS_SAGA", workerProductDetailsSaga);
}
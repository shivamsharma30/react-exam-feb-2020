
import { put, takeLatest, call } from 'redux-saga/effects';
import getSearchProduct from '../api/searchProduct';
import { setProducts } from '../actions/getProductAction';
function* workerProductSaga({ payload }) {
  const { searchText } = payload;

  const reqBody = {
    term: searchText,
    sortBy: "new asc",
    page: 0,
    recordsPerPage: 20,
    heirarchical: [],
    multiselect: [],
    singleselect: [],
    range: []
  };
  
  try {
    const response = yield call(getSearchProduct, reqBody);
    const { records } = response&&response.data&&response.data.response;
    yield put(
        setProducts(records)
    );
  } catch (err) {
    
  }
}

export default function* watchProductSaga() {
  yield takeLatest("GET_PRODUCTS_SAGA", workerProductSaga);
}
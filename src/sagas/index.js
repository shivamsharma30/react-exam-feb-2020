import { all, fork } from 'redux-saga/effects';
import watchLogInSaga from './logInSaga';
import watchProductSaga from './searchProductSaga';
import watchProductDetailsSaga from './productDetailsSaga';

function* root() {
  yield all([
    fork(watchLogInSaga),
    fork(watchProductSaga),
    fork(watchProductDetailsSaga)
  ]);
}

export default root;

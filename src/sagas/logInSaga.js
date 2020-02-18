
import { put, takeLatest, call } from 'redux-saga/effects';
import getAccessToken from '../api/logInApi';
import {setAccessToken} from '../actions/logInActions';
function* workerlogInSaga({ payload }) {
  const reqData = {
    username: payload.email,
    password: payload.password
  }
  
  try {
    const response = yield call(getAccessToken, reqData);
    const { access_token } = response.data;
    yield put(
      setAccessToken({ access_token })
    );
  } catch (err) {
    
  }
}

export default function* watchlogInSaga() {
  yield takeLatest("LOG_IN_SAGA", workerlogInSaga);
}

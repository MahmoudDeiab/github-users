import { takeLatest, put } from "redux-saga/effects";
import {
  FETCH_USER,
  REPLACE_USER,
  TOGGLE_IS_FETCHING,
  RESET_USER
} from "../actions/userActions";
import { getUserRequestUrl } from "../api";

function* handleFetchUser(action) {
  const { payload } = action;
  const requestUrl = getUserRequestUrl(payload);
  try {
    const response = yield fetch(requestUrl);
    if (response.status === 200) {
      const payload = yield response.json();
      yield put({ type: REPLACE_USER, payload });
    }
    if (response.status === 404) {
      yield put({ type: RESET_USER });
    }
  } catch (error) {
    yield put({ type: RESET_USER });
    console.log(error.message);
  }
  yield put({ type: TOGGLE_IS_FETCHING });
}

export function* watchUsersActions() {
  yield takeLatest(FETCH_USER, handleFetchUser);
}

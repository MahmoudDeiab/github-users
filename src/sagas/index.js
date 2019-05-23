import { all, fork } from "redux-saga/effects";
import { watchUsersActions } from "./usersSaga";

export default function* root() {
  yield all([fork(watchUsersActions)]);
}

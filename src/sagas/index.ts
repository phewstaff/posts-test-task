import { all, fork } from "redux-saga/effects";
import postsSaga from "./postsSaga";
import commentsSaga from "./commentsSaga";
import selectedUserSaga from "./selectedUserSaga.ts";

export function* rootSaga() {
  yield all([fork(postsSaga), fork(commentsSaga), fork(selectedUserSaga)]);
}

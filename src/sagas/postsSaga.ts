import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { fetchPostsSuccess } from "../reduxStore/reducers/posts";

function* workGetPostsFetch(): Generator<any, void, any> {
  const cats = yield call(() =>
    axios("https://jsonplaceholder.typicode.com/posts")
  );
}

function* postsSaga() {
  yield takeEvery("posts/getPostsFetch", workGetPostsFetch);
}

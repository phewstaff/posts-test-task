import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import { IPost, fetchPostsSuccess } from "../reduxStore/reducers/posts";

function* workGetPostsFetch(): Generator<any, void, any> {
  const posts = yield call(() =>
    axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts")
  );
  const formattedPosts = yield posts.data;

  yield put(fetchPostsSuccess(formattedPosts));
}

function* postsSaga() {
  yield takeEvery("posts/fetchPostsStart", workGetPostsFetch);
}

export default postsSaga;

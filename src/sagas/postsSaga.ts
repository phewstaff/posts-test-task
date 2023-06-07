import axios, { AxiosResponse } from "axios";
import { call, put, takeEvery, delay } from "redux-saga/effects";
import { IPost, fetchPostsSuccess } from "../reduxStore/reducers/posts";

function* workGetPostsFetch(): Generator<
  unknown,
  void,
  AxiosResponse<IPost[]>
> {
  const response: AxiosResponse<IPost[]> = yield call(() =>
    axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts")
  );
  const formattedPosts: IPost[] = response.data;

  yield delay(1500); // Fake delay of 1 second

  yield put(fetchPostsSuccess(formattedPosts));
}

function* postsSaga() {
  yield takeEvery("posts/fetchPostsStart", workGetPostsFetch);
}

export default postsSaga;

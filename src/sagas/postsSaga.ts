import axios, { AxiosResponse } from "axios";
import { call, put, takeEvery, delay } from "redux-saga/effects";
import {
  fetchPostsFailure,
  fetchPostsSuccess,
  setTotalCount,
} from "../reduxStore/reducers/postsSlice";
import { IPost } from "../utils/types";
import { PayloadAction } from "@reduxjs/toolkit";

function* workGetPostsFetch(
  action: PayloadAction<number | null>
): Generator<unknown, void, AxiosResponse<IPost[]>> {
  const page = action.payload;
  try {
    const response: AxiosResponse<IPost[]> = yield call(() =>
      axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts", {
        params: {
          _limit: 10,
          _page: page,
        },
      })
    );

    const formattedPosts: IPost[] = response.data;

    yield delay(500);

    yield put(setTotalCount(response.headers["x-total-count"]));

    yield put(fetchPostsSuccess(formattedPosts));
  } catch (error) {
    yield put(fetchPostsFailure("Failed to fetch posts:"));
  }
}

function* postsSaga() {
  yield takeEvery("posts/fetchPostsStart", workGetPostsFetch);
}

export default postsSaga;

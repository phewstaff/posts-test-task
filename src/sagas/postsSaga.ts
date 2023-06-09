import axios, { AxiosResponse } from "axios";
import { call, put, takeEvery, delay } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchPostsSuccess,
  setTotalCount,
} from "../reduxStore/reducers/postsSlice";
import { IPost } from "../utils/types";

function* workGetPostsFetch(
  action: PayloadAction<number | null>
): Generator<unknown, void, AxiosResponse<IPost[]>> {
  const page = action.payload;
  const response: AxiosResponse<IPost[]> = yield call(() =>
    axios.get<IPost[]>("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _limit: 10,
        _page: page,
      },
    })
  );

  const formattedPosts: IPost[] = response.data;

  yield delay(1500); // Fake delay of 1.5 seconds

  yield put(setTotalCount(response.headers["x-total-count"]));

  yield put(fetchPostsSuccess(formattedPosts));
}

function* postsSaga() {
  yield takeEvery("posts/fetchPostsStart", workGetPostsFetch);
}

export default postsSaga;

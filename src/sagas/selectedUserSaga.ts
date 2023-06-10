import axios, { AxiosResponse } from "axios";
import { call, put, takeEvery, delay } from "redux-saga/effects";
import { PayloadAction } from "@reduxjs/toolkit";
import {
  fetchUserSuccess,
  fetchUserFailure,
} from "../reduxStore/reducers/selectedUserSlice";
import {
  fetchSelectedUserPostsSuccess,
  fetchSelectedUserPostsFailure,
} from "../reduxStore/reducers/selectedUserPostsSlice";

function* workFetchUser(
  action: PayloadAction<number>
): Generator<unknown, void, AxiosResponse<any>> {
  try {
    const userId = action.payload;
    const response: AxiosResponse<any> = yield call(() =>
      axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
    );
    const user = response.data;

    yield delay(500);

    yield put(fetchUserSuccess(user));
  } catch (error) {
    yield put(fetchUserFailure("failed to fetch"));
  }
}

function* workFetchPostsByUserId(
  action: PayloadAction<number>
): Generator<unknown, void, AxiosResponse<any>> {
  try {
    const userId = action.payload;
    const response: AxiosResponse<any> = yield call(() =>
      axios.get(`https://jsonplaceholder.typicode.com/user/${userId}/posts`)
    );

    const posts = response.data;

    yield delay(500);

    yield put(fetchSelectedUserPostsSuccess(posts));
  } catch (error) {
    yield put(fetchSelectedUserPostsFailure("error"));
  }
}

function* selectedUserSaga() {
  yield takeEvery("user/fetchUserStart", workFetchUser);
  yield takeEvery(
    "selectedUserPosts/fetchSelectedUserPostsStart",
    workFetchPostsByUserId
  );
}

export default selectedUserSaga;

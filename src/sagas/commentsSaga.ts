import axios, { AxiosResponse } from "axios";
import { call, put, takeEvery, delay } from "redux-saga/effects";
import { fetchCommentsSuccess } from "../reduxStore/reducers/commentsSlice";
import { PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "../utils/types";

function* workGetCommentsFetch(
  action: PayloadAction<number>
): Generator<unknown, void, AxiosResponse<IComment[]>> {
  const postId = action.payload;
  const response: AxiosResponse<IComment[]> = yield call(() =>
    axios.get<IComment[]>(
      `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
    )
  );
  const formattedComments: IComment[] = response.data;

  yield delay(1500); // Fake delay of 1.5 seconds

  yield put(fetchCommentsSuccess({ postId, comments: formattedComments }));
}

function* commentsSaga() {
  yield takeEvery("comments/fetchCommentsStart", workGetCommentsFetch);
}

export default commentsSaga;

import axios, { AxiosResponse } from "axios";
import { call, put, takeEvery, delay } from "redux-saga/effects";
import {
  IComment,
  fetchCommentsSuccess,
} from "../reduxStore/reducers/comments";

function* workGetCommentsFetch(
  action: any
): Generator<unknown, void, AxiosResponse<IComment[]>> {
  const postId = action.payload.postId;

  const response: AxiosResponse<IComment[]> = yield call(() =>
    axios.get<IComment[]>(
      `https://jsonplaceholder.typicode.com/comments?postId=1`
    )
  );
  const formattedComments: IComment[] = response.data;

  yield delay(1500); // Fake delay of 1.5 seconds

  yield put(fetchCommentsSuccess(formattedComments));
}

function* commentsSaga() {
  yield takeEvery("comments/fetchCommentsStart", workGetCommentsFetch);
}

export default commentsSaga;

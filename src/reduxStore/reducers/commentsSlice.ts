import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IComment } from "../../utils/types";

interface CommentsState {
  data: { [postId: number]: IComment[] };
  loading: boolean;
  error: string | null;
}

const initialState: CommentsState = {
  data: {},
  loading: false,
  error: null,
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    fetchCommentsStart(state, _action: PayloadAction<number>) {
      state.loading = true;
      state.error = null;
    },

    fetchCommentsSuccess(
      state,
      action: PayloadAction<{ postId: number; comments: IComment[] }>
    ) {
      const { postId, comments } = action.payload;
      state.data[postId] = comments;
      state.loading = false;
      state.error = null;
    },

    fetchCommentsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchCommentsStart,
  fetchCommentsSuccess,
  fetchCommentsFailure,
} = commentsSlice.actions;

export default commentsSlice.reducer;

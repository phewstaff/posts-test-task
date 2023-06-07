import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IComment {
  id: number;
  postId: number;
  text: string;
  email: string;
}

interface CommentsState {
  data: IComment[];
  loading: boolean;
  error: string | null;
}

const initialState: CommentsState = {
  data: [],
  loading: false,
  error: null,
};

export const commentsSlice = createSlice({
  name: "comments",
  initialState,
  reducers: {
    fetchCommentsStart(state, action: PayloadAction<number>) {
      state.loading = true;
      state.error = null;
    },

    fetchCommentsSuccess(state, action: PayloadAction<IComment[]>) {
      state.data = action.payload;
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

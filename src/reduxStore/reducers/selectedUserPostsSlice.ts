import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../utils/types";

interface SelectedUserPostsState {
  posts: IPost[];
  loading: boolean;
  error: string | null;
}

const initialState: SelectedUserPostsState = {
  posts: [],
  loading: false,
  error: null,
};

export const selectedUserPostsSlice = createSlice({
  name: "selectedUserPosts",
  initialState,
  reducers: {
    fetchSelectedUserPostsStart(state) {
      state.loading = true;
      state.error = null;
    },

    fetchSelectedUserPostsSuccess(state, action: PayloadAction<IPost[]>) {
      state.posts = action.payload;
      state.loading = false;
      state.error = null;
    },

    fetchSelectedUserPostsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const {
  fetchSelectedUserPostsStart,
  fetchSelectedUserPostsSuccess,
  fetchSelectedUserPostsFailure,
} = selectedUserPostsSlice.actions;

export default selectedUserPostsSlice.reducer;

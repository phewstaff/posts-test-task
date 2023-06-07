import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface IPost {
  id: number;
  title: string;
  text: string;
}

interface PostsState {
  data: IPost[];
  loading: boolean;
  error: string | null;
}

const initialState: PostsState = {
  data: [],
  loading: false,
  error: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPostsStart(state) {
      state.loading = true;
      state.error = null;
    },

    fetchPostsSuccess(state, action: PayloadAction<IPost[]>) {
      state.data = action.payload;
      state.loading = false;
      state.error = null;
    },

    fetchPostsFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchPostsStart, fetchPostsSuccess, fetchPostsFailure } =
  postsSlice.actions;

export default postsSlice.reducer;

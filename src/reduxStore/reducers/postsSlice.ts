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
  totalPostsCount: number | null;
  totalPagesCount: number | null;
  limit: number | null;
  page: number | null;
}

const initialState: PostsState = {
  data: [],
  loading: false,
  error: null,
  totalPostsCount: null,
  limit: 1,
  page: 2,
  totalPagesCount: null,
};

export const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    fetchPostsStart(state, action: PayloadAction<number | null>) {
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

    setTotalCount(state, action: PayloadAction<number>) {
      state.totalPostsCount = action.payload;
    },

    setLimit(state, action: PayloadAction<number>) {
      state.limit = action.payload;
      state.limit = action.payload;
    },

    setTotalPagesCount(state, action: PayloadAction<number>) {
      state.totalPagesCount = action.payload;
    },

    setCurrentPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
  },
});

export const {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  setTotalCount,
} = postsSlice.actions;

export default postsSlice.reducer;

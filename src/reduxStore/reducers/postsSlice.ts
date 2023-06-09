import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IPost } from "../../utils/types";

interface PostsState {
  data: IPost[];
  loading: boolean;
  error: string | null;
  totalPostsCount: number;
  totalPagesCount: number;
  limit: number;
  page: number;
  searchQuery: string | null;
  sortOrder: "asc" | "desc";
}

const initialState: PostsState = {
  data: [],
  loading: false,
  error: null,
  totalPostsCount: 0,
  limit: 10,
  page: 1,
  totalPagesCount: 1,
  searchQuery: null,
  sortOrder: "asc",
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

    setSearchQuery(state, action: PayloadAction<string | null>) {
      state.searchQuery = action.payload;
    },

    setSortOrder(state, action: PayloadAction<"asc" | "desc">) {
      state.sortOrder = action.payload;
    },
  },
});

export const {
  fetchPostsStart,
  fetchPostsSuccess,
  fetchPostsFailure,
  setTotalCount,
  setTotalPagesCount,
  setCurrentPage,
  setSearchQuery,
  setSortOrder,
} = postsSlice.actions;

export default postsSlice.reducer;

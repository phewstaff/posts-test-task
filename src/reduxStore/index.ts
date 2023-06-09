import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./reducers/postsSlice";
import createSagaMiddleware from "redux-saga";
import { commentsSlice } from "./reducers/commentsSlice";
import { selectedUserSlice } from "./reducers/selectedUserSlice";
import { selectedUserPostsSlice } from "./reducers/selectedUserPostsSlice";

export const saga = createSagaMiddleware();
const middleware = [saga];

const rootReducer = combineReducers({
  posts: postsSlice.reducer,
  comments: commentsSlice.reducer,
  selctedUser: selectedUserSlice.reducer,
  selectedUserPosts: selectedUserPostsSlice.reducer,
});

export const setupStore = () => {
  return configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(middleware),
  });
};

export type RootState = ReturnType<typeof rootReducer>;
export type AppStore = ReturnType<typeof setupStore>;
export type AppDispatch = AppStore["dispatch"];

export default setupStore;

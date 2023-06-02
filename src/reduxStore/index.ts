import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { postsSlice } from "./reducers/posts";
import createSagaMiddleware from "redux-saga";

// Import your reducers
// import postsReducer from "./reducers/posts";

export const saga = createSagaMiddleware();
const middleware = [saga];

const rootReducer = combineReducers({
  posts: postsSlice.reducer,
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

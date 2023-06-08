import { useEffect } from "react";

import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchPostsStart } from "./reduxStore/reducers/postsSlice";
import AppRouter from "./components/business/AppRouter";

function App() {
  const dispatch = useAppDispatch();
  const page = useAppSelector((state) => state.posts.page);

  useEffect(() => {
    dispatch(fetchPostsStart(page));
  }, [dispatch]);

  return (
    <>
      <BrowserRouter>
        <AppRouter />
      </BrowserRouter>
    </>
  );
}

export default App;

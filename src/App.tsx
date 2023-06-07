import { useEffect } from "react";

import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import AppRouter from "./components/AppRouter";
import { useAppDispatch, useAppSelector } from "./hooks/redux";
import { fetchPostsStart } from "./reduxStore/reducers/posts";

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPostsStart());
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

import { useEffect } from "react";

import "./App.scss";
import { BrowserRouter } from "react-router-dom";
import { useAppDispatch } from "./hooks/redux";
import { fetchPostsStart } from "./reduxStore/reducers/posts";
import AppRouter from "./components/business/AppRouter";

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

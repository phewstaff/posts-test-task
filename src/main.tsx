import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import App from "./App.tsx";
import "./index.css";
import setupStore, { saga } from "./reduxStore/index.ts";
import { rootSaga } from "./sagas/index.ts";

const store = setupStore();

saga.run(rootSaga);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

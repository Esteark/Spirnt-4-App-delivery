import React from "react";
import ReactDOM from "react-dom/client";
import "./main.scss";
import RouterDom from "./router/RouterDom";
import { Provider } from "react-redux";
import store from "./redux/store/store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <RouterDom />
  </Provider>
);

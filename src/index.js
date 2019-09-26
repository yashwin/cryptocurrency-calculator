import React from "react";
import axios from "axios";
import { API_BASE_PATH } from "./config/service";
import ReactDOM from "react-dom";
import ReduxThunk from "redux-thunk";
import { Provider } from "react-redux";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./root-reducer";
import "bootstrap/dist/css/bootstrap.min.css";

axios.defaults.baseURL = API_BASE_PATH;
axios.defaults.headers.common["Content-Type"] = "application/json";

const composeEnhancers =
  typeof window === "object" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const enhancer = composeEnhancers(applyMiddleware(ReduxThunk));
const store = createStore(reducers, enhancer);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();

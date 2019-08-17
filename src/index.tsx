import * as React from "react";
import * as ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import rootReducer from "./reducers";
import thunk from "redux-thunk";
const middleware = [thunk];
const store = createStore(rootReducer, applyMiddleware(...middleware));

console.log(process.env.REACT_APP_API_KEY);
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

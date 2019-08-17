import { combineReducers } from "redux";
import todos from "./todos";
import errors from "./errors";
const rootReducer = combineReducers({
  todos,
  errors
  //ここの名前がstate名になる
});

export default rootReducer;

export type AppState = ReturnType<typeof rootReducer>;

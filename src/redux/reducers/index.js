import { combineReducers } from "redux";
import searchReducer from "./searchreducer";

const rootReducer = combineReducers({
  result: searchReducer,
});

export default rootReducer;

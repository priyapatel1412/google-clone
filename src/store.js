import { applyMiddleware, combineReducers, compose } from "redux";
import { legacy_createStore as createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import searchReducer from "./redux/reducers/searchreducer";

const middleware = [thunk];

let initialState = {};

const reducer = combineReducers({
  result: searchReducer,
});

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;

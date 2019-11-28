import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducers from "../reducers/combineReducers";

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
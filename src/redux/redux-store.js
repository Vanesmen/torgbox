import { createStore, combineReducers, applyMiddleware, compose } from "redux";
import timezoneReducer from "./timezone-reducer";
import thunkMiddleWare from "redux-thunk";

let ruducers = combineReducers({
  clockCard: timezoneReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(ruducers, composeEnhancers(applyMiddleware(thunkMiddleWare)));

export default store;
import { combineReducers } from "redux";
import counterReducer from "./counter/counterReducer";
import daynamicCounterReducer from "./daynamicCounter/daynamicReducer";

const rootReducer = combineReducers({
  counter: counterReducer,
  daynamicCounter: daynamicCounterReducer,
});

export default rootReducer;

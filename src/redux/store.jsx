import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import myLogger from "./middlewars/mylogger";
import { composeWithDevTools } from "redux-devtools-extension";
import logger from "redux-logger";

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(logger, myLogger))
);

export default store;

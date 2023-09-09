import { applyMiddleware, createStore } from "redux";
import rootReducer from "./rootReducer";
import myLogger from "./middlewars/mylogger";
import logger from "redux-logger";

const store = createStore(rootReducer, applyMiddleware(logger, myLogger));

export default store;

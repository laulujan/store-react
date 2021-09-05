import { configureStore } from "@reduxjs/toolkit";

import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    devTools: true,
    reducer: rootReducer(history),
    middleware: [sagaMiddleware],
  });

sagaMiddleware.run(rootSaga);
export default store;

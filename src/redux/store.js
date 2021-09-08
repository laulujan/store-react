import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import thunk from 'redux-thunk';

import rootReducer from "./root-reducer";
import rootSaga from "./root-saga";

import { createBrowserHistory } from "history";
export const history = createBrowserHistory();

const sagaMiddleware = createSagaMiddleware();

const persistConfig = {
  key: 'root',
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer(history));

export const store = configureStore({
    devTools: true,
    reducer: persistedReducer,
    middleware: [sagaMiddleware, thunk],
  });

sagaMiddleware.run(rootSaga);
export default store;

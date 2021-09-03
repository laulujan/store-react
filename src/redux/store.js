import { configureStore } from "@reduxjs/toolkit";

//should uncomment this once defined
// import createSagaMiddleware from "redux-saga";

import rootReducer from "./root-reducer";
// import rootSaga from "./root-saga";

// const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
    devTools: true,
    reducer: rootReducer,
    // middleware: [sagaMiddleware],
  });

// sagaMiddleware.run(rootSaga);
export default store;

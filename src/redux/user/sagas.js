import { 
  call, 
  put, 
  spawn, 
  takeLatest 
} from "redux-saga/effects";
import { 
  logIn, 
  setToken, 
  logOut 
} from "../user/reducer";

import accountService from "../../api/accountService";

function* displayError(message) {
  yield call(console.log, message);
}

function* onLogIn(action) {
  const result = yield call(accountService.logInUser, action.payload);
  const { success, data, message } = result;
  if (success) {
    yield console.log("holis");
    yield console.log(message);
    yield put(setToken(data.token));
    yield window.localStorage.setItem("user-token", data.token);
    yield call(Window.nav.push, "/");
  } else {
    yield call(displayError, result);
  }
}

function* onLogOut() {
  yield window.localStorage.removeItem("user-token");
  yield call(Window.nav.push, "/");
}

function* listenActions() {
  yield takeLatest(logIn, onLogIn);
  yield takeLatest(logOut, onLogOut);
}

function* initSaga() {
  yield spawn(listenActions);
}

export default initSaga;

import { 
  call, 
  put, 
  spawn, 
  takeLatest 
} from "redux-saga/effects";
import { 
  logIn, 
  signUp,
  setToken, 
  logOut 
} from "../user/reducer";

import accountService from "../../api/accountService";

function* displayError(message) {
  yield call(alert, message);
}

function* onLogIn(action) {
  try {
    const result = yield call(accountService.logInUser, action.payload);
    const { success, data, message } = result.data;
    if (success) {
      yield put(setToken(data.token));
      yield window.localStorage.setItem("user-token", data.token);
      yield console.log("signing in");
      yield call(Window.nav.push, "/");
    } else {
      yield call(displayError, message);
    }
  } 
  catch(error) {
    yield call(displayError, error);
  }
}

function* onSignUp(action) {
  try {
    const result = yield call(accountService.signUpUser, action.payload);
    const { success, data, message } = result.data;
    if (success) {
      yield put(setToken(data.token));
      yield window.localStorage.setItem("user-token", data.token);
      yield console.log("signing in");
      yield call(Window.nav.push, "/");
    } else {
      yield call(displayError, message);
    }
  } 
  catch(error) {
    yield call(displayError, error);
  }
}

function* onLogOut() {
  try {
    yield console.log("signing out");
  }
  catch(error) {
    yield call(displayError,error);
  }
  //yield window.localStorage.removeItem("user-token");
  
  //yield call(Window.nav.push, "/");
}

function* listenActions() {
  yield takeLatest(signUp,onSignUp);
  yield takeLatest(logIn, onLogIn);
  yield takeLatest(logOut, onLogOut);
}

function* initSaga() {
  yield spawn(listenActions);
}

export default initSaga;

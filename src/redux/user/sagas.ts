import { PayloadAction } from '@reduxjs/toolkit';
import { 
  call, 
  put, 
  spawn, 
  takeLatest 
} from 'redux-saga/effects';
import { 
  logIn,
  logOut, 
  signUp,
  setToken, 
  removeToken,
} from '../user/reducer';

import accountService from '../../api/accountService';
import { UserCredentials } from '../types';
import { AxiosResponse } from 'axios';

function* displayError(message: any) {
  yield call(alert, message);
};

function* onLogIn(action: PayloadAction<UserCredentials>) {
  try {
    const result: AxiosResponse = yield call(accountService.logInUser, action.payload);
    const { success, data, message } = result.data;
    if (success) {
      yield put(setToken(data.token));
      yield window.localStorage.setItem("user-token", data.token);
      yield console.log("signing in");
      yield call(window.nav.push, "/");
    } else {
      yield call(displayError, message);
    }
  } 
  catch(error) {
    yield call(displayError, error);
  }
};

function* onSignUp(action: PayloadAction<UserCredentials>) {
  try {
    const result: AxiosResponse = yield call(accountService.signUpUser, action.payload);
    const { success, data, message } = result.data;
    if (success) {
      yield put(setToken(data.token));
      yield window.localStorage.setItem("user-token", data.token);
      yield console.log("signing up");
      yield call(window.nav.push, "/");
    } else {
      yield call(displayError, message);
    }
  } 
  catch(error) {
    yield call(displayError, error);
  }
};

function* onLogOut() {
  try {
    yield put(removeToken());
    yield console.log("signing out");
    yield window.localStorage.removeItem("user-token");
  }
  catch(error) {
    yield call(displayError,error);
  }
};

function* listenActions() {
  yield takeLatest(signUp,onSignUp);
  yield takeLatest(logIn, onLogIn);
  yield takeLatest(logOut, onLogOut);
};

function* initSaga() {
  yield spawn(listenActions);
};

export default initSaga;

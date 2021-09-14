import { spawn } from 'redux-saga/effects';
import userSaga from './user/sagas';
import  productsSaga from './products/sagas';


export default function* root() {
  yield spawn(userSaga);
  yield spawn(productsSaga);
};
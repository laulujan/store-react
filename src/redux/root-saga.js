import { spawn } from "redux-saga/effects";
//import products Saga or sth like that
import userSaga from "./user/sagas";
import  productsSaga from "./products/sagas";
//import cartSaga from "./cart/sagas"

export default function* root() {
  yield spawn(userSaga);
  yield spawn(productsSaga);
  //yield spawn(cartSaga)
}
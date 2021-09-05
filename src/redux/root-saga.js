import { spawn } from "redux-saga/effects";
//import products Saga or sth like that
import userSaga from "./user/sagas";

export default function* root() {
  yield spawn(userSaga);
}
import React from "react";
import { ConnectedRouter } from "connected-react-router";
import {
  Switch,
  Route,
} from "react-router-dom";
import { useSelector } from "react-redux";

import Private from "./components/Private";
import Home from './pages/Home';
import Shop from './pages/Shop';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp'

import Category from './pages/Category';
import CheckOut from './pages/CheckOut';
import SuccessfulCheckOut from './pages/SuccessfulPayment';
import Directory from './pages/Directory';
import ProcessPayment from './pages/ProcessPayment';
import Nav from './components/Nav';

import store, { history } from "./redux/store";
import { setToken } from "./redux/user/reducer";

Window.nav = history;

export default function Router() {
  console.log("loaded router");
  const localToken = window.localStorage.getItem("user-token");
  if (localToken) store.dispatch(setToken(localToken));
  const storeToken = useSelector((state) => state.user.token);
  return (
    <ConnectedRouter history={history}>
      <div>
        <Nav />
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/sign-up">
            <SignUp />
          </Route>
          <Route path="/login">
            <LogIn />
          </Route>
          <Route path="/directory">
            <Directory />
          </Route>
          <Route path="/category/:category">
            <Category />
          </Route>
          <Private 
            path="/checkout"
            isAuthenticated={storeToken}
            redirectTo="/login"
          >
            <CheckOut />
          </Private>
          <Route path="/successful-payment">
            <SuccessfulCheckOut />
          </Route>
          <Route path="/process-payment">
            <ProcessPayment />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </ConnectedRouter>
  );
}
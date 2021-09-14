import React from "react";
import { ConnectedRouter } from "connected-react-router";
import {
  Switch,
  Route,
} from "react-router-dom";
import { useAppSelector } from "./redux/hooks";

import CustomRedirect from "./components/CustomRedirect";
import Home from './pages/Home';
import LogIn from './pages/LogIn';
import SignUpPage from './pages/SignUp'

import Category from './pages/Category';
import CheckOut from './pages/CheckOut';
import SuccessfulCheckOut from './pages/SuccessfulPayment';
import Directory from './pages/Directory';
import ProcessPayment from './pages/ProcessPayment';
import Nav from './components/Nav';

import store, { history } from "./redux/store";
import { setToken } from "./redux/user/reducer";

window.nav = history;

export default function Router() {
  const localToken = window.localStorage.getItem("user-token");
  if (localToken) store.dispatch(setToken(localToken));
  const storeToken = useAppSelector((state) => state.user.token);
  return (
    <ConnectedRouter history={history}>
      <div>
        <Nav />
        <Switch>
          <CustomRedirect 
            path="/sign-up"
            shouldDisplay={!storeToken}
            redirectTo="/"
          >
            <SignUpPage />
          </CustomRedirect>
          <CustomRedirect 
            path="/log-in"
            shouldDisplay={!storeToken}
            redirectTo="/"
          >
            <LogIn />
          </CustomRedirect>
          <Route path="/directory">
            <Directory />
          </Route>
          <Route path="/category/:category">
            <Category />
          </Route>
          <CustomRedirect 
            path="/checkout"
            shouldDisplay={Boolean(storeToken)}
            redirectTo="/log-in"
          >
            <CheckOut />
          </CustomRedirect>
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
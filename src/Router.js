import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
} from "react-router-dom";

import Home from './pages/Home';
import Shop from './pages/Shop';
import LogIn from './pages/LogIn';

import Category from './pages/Category';
import CheckOut from './pages/CheckOut';
import Directory from './pages/Directory';
import ProcessPayment from './pages/ProcessPayment';
import Nav from './components/Nav'

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        <Nav />
        <Switch>
          <Route path="/shop">
            <Shop />
          </Route>
          <Route path="/sign-in">
            <LogIn />
          </Route>
          <Route path="/directory">
            <Directory />
          </Route>
          <Route path="/category">
            <Category />
          </Route>
          <Route path="/checkout">
            <CheckOut />
          </Route>
          <Route path="/process-payment">
            <ProcessPayment />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}
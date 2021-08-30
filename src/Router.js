import React from "react";
import {
  BrowserRouter,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from './pages/Home';
import Shop from './pages/Shop';
import LogIn from './pages/LogIn';

import Category from './pages/Category';
import CheckOut from './pages/CheckOut';
import Directory from './pages/Directory';
import ProcessPayment from './pages/ProcessPayment';

export default function Router() {
  return (
    <BrowserRouter>
      <div>
        <nav>
            <p>navbar goes here with these links:</p>
          <ul>
            <li>
              <Link to="/">Home (shop logo)</Link>
            </li>
            <li>
              <Link to="/shop">Shop</Link>
            </li>
            <li>
              <Link to="/sign-in">Sign In</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
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
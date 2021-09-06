import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

const Private = ({ children, isAuthenticated, path, redirectTo }) => {
    console.log(isAuthenticated ? "token exists" : "NO token");
    return (
    <Route
        path={path}
      render={
          () => (
          isAuthenticated ?
          (
              children
            ) : (
              <Redirect
                to={redirectTo}
              />
            )
          )
      }
    />
  );
};

export default Private;
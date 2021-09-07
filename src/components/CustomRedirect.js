import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

const CustomRedirect = ({ children, shouldDisplay, path, redirectTo }) => {
    //const label = shouldDisplay ? "token exists" : "NO token";
    return (
    <Route
        path={path}
      render={
          () => (
          shouldDisplay ?
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

export default CustomRedirect;
import React from 'react';
import {
  Route,
  Redirect
} from 'react-router-dom';

type CustomRedirectProps = {
  shouldDisplay: boolean, 
  path: string, 
  redirectTo: string,
};

const CustomRedirect: React.FC<CustomRedirectProps> = ({ 
  children, 
  shouldDisplay, 
  path, 
  redirectTo 
}) => {
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
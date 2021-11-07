import React from 'react';
import { Redirect, Route } from 'react-router-dom';

const PublicRouter = ({ loged, component: Component }) => {
  return (
    <Route
      component={(props) =>
        loged ? <Redirect to="/" /> : <Component {...props} />
      }
    />
  );
};

export default PublicRouter;

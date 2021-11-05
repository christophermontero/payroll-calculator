import React from 'react';
import { Route, Switch } from 'react-router-dom';
import AppPage from '../pages/AppPage';

const AppRouter = () => {
  return (
    <Switch>
      <Route exact path="/app" component={AppPage} />
    </Switch>
  );
};

export default AppRouter;

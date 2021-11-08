import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AppPage from '../pages/AppPage';
import PrivateRouter from './PrivateRouter';
import { firebase } from '../firebase/configFirebase';
import { login } from '../actions/auth';
import { useDispatch } from 'react-redux';
import AuthRouter from './AuthRouter';
import PublicRouter from './PublicRouter';

const AppRouter = () => {
  const dispatch = useDispatch();

  const [loged, setLoged] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));
        setLoged(true);
      } else {
        setLoged(false);
      }
    });
  }, [dispatch, loged]);

  return (
    <Router>
      <Switch>
        <PublicRouter path="/auth" loged={loged} component={AuthRouter} />
        <PrivateRouter exact path="/" loged={loged} component={AppPage} />
      </Switch>
    </Router>
  );
};

export default AppRouter;

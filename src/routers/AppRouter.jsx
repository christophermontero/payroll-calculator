import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AppPage from '../pages/AppPage';
import PrivateRouter from './PrivateRouter';
import { firebase } from '../firebase/configFirebase';
import { login } from '../actions/auth';
import { useDispatch } from 'react-redux';
import AuthRouter from './AuthRouter';
import PublicRouter from './PublicRouter';
import { loadData } from '../helpers/loadData';
import { readRecords } from '../types/payroll';

const AppRouter = () => {
  const dispatch = useDispatch();

  const [loged, setLoged] = useState(false);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        dispatch(login(user.uid, user.displayName));

        setLoged(true);

        const data = await loadData(user.uid);
        dispatch(readRecords(data));
      } else {
        setLoged(false);
      }
    });
  }, [dispatch]);

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

import React from 'react';
import { Provider } from 'react-redux';
import { store } from './store/store';
import AppRouter from './routers/AppRouter';
import 'materialize-css/dist/css/materialize.min.css';

function App() {
  return (
    <Provider store={store}>
      <AppRouter />
    </Provider>
  );
}

export default App;

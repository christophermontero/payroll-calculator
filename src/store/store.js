import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { authReducer } from '../reducers/authReducer';
import { payrollReducer } from '../reducers/payrollReducer';

const reducers = combineReducers({
  auth: authReducer,
  payroll: payrollReducer
});

export const store = createStore(reducers, applyMiddleware(thunk));

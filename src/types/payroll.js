import { db } from '../firebase/configFirebase';
import { types } from './types';

export const createRecord = (payment) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const data = {
      date: new Date(),
      payment
    };

    await db.collection(`${uid}/payrolls/payroll`).add(data);
  };
};

export const readRecords = (data) => {
  return { type: types.payrollRead, payload: data };
};

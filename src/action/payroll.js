import { db } from '../firebase/configFirebase';
import { types } from '../types/types';

export const createRecord = (payment) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    const data = {
      date: new Date().toLocaleDateString(),
      payment
    };

    const ref = await db.collection(`${uid}/payrolls/payroll`).add(data);

    const newData = {
      ...data,
      id: ref.id
    };

    dispatch(add(newData));
  };
};

export const readRecords = (data) => {
  return { type: types.payrollRead, payload: data };
};

export const add = (data) => {
  return {
    type: types.payrollAdd,
    payload: data
  };
};

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

export const removeRecord = (id) => {
  return async (dispatch, getState) => {
    const { uid } = getState().auth;

    await db.doc(`${uid}/payrolls/payroll/${id}`).delete();

    dispatch(remove(id));
  };
};

export const remove = (id) => {
  return {
    type: types.payrollDelete,
    payload: id
  };
};

export const clean = () => {
  return {
    type: types.payrollClean
  };
};

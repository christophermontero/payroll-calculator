import { db } from '../firebase/configFirebase';

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

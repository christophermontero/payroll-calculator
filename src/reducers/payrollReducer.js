import { types } from '../types/types';

export const payrollReducer = (state = {}, action) => {
  switch (action.type) {
    case types.payrollAdd:
      return {};

    default:
      return state;
  }
};

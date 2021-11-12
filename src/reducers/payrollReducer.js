import { types } from '../types/types';

export const payrollReducer = (state = {}, action) => {
  switch (action.type) {
    case types.payrollAdd:
      return {};

    case types.payrollRead:
      return {
        ...state,
        data: action.payload
      };

    default:
      return state;
  }
};

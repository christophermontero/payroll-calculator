import { types } from '../types/types';

const initialState = {
  data: []
};

export const payrollReducer = (state = initialState, action) => {
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

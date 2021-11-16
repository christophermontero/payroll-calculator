import { types } from '../types/types';

const initialState = {
  data: []
};

export const payrollReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.payrollAdd:
      return {
        ...state,
        data: [...state.data, action.payload]
      };

    case types.payrollRead:
      return {
        ...state,
        data: action.payload
      };

    case types.payrollDelete:
      return {
        ...state,
        data: state.data.filter((payroll) => payroll.id !== action.payload)
      };

    case types.payrollClean:
      return {
        ...state,
        data: []
      };

    default:
      return state;
  }
};

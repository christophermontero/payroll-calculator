import { types } from '../types/types';

export const googleLogin = (id, username) => {
  return {
    types: types.login,
    payload: {
      id,
      username
    }
  };
};

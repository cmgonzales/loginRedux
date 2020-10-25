import { ADD_USER } from './userType';

export const user = (nases) => {
  return {
    type: ADD_USER,
    payload: nases,
  };
};

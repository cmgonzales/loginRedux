import { ADD_USER } from './userType';

export const user = (names) => {
  return {
    type: ADD_USER,
    payload: names,
  };
};

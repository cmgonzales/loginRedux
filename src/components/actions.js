import { ADD_USER } from './userType';

export const user = (name) => {
  return {
    type: ADD_USER,
    payload: name,
  };
};

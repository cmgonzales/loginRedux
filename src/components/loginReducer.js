import {ADD_USER} from './actions';

const initialState = {
  name: ''
};

const crimesReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_USER:
      return {
        crimes: action.payload,
      };
    default:
      return state;
  }
};

export default crimesReducer;

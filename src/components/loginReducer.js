import { SEE_CRIMES } from "./crimeTypes";

const initialState = {
  name,
};

const crimesReducer = (state = initialState, action) => {
  switch (action.type) {
    case SEE_CRIMES:
      return {
        crimes: action.payload,
      };
    default:
      return state;
  }
};

export default crimesReducer;

import { DDECREMENT, DINCREMENT } from "./daynamicActionTypes";

const initialState = {
  value: 20,
};

const daynamicCounterReducer = (state = initialState, action) => {
  switch (action.type) {
    case DINCREMENT:
      return {
        ...state,
        value: state.value + action.payload,
      };

    case DDECREMENT:
      return {
        ...state,
        value: state.value - action.payload,
      };

    default:
      return state;
  }
};

export default daynamicCounterReducer;

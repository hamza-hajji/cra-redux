import { SET_VALUE } from "../constants";

export default (state = {}, action) => {
  if (action.type === SET_VALUE) {
    return {
      ...state,
      value: action.value
    };
  }

  return state;
};
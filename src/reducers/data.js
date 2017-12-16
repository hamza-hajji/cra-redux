import { SET_VALUE } from "../constants";

export default (state = {}, action) => {
  if (action.type === SET_VALUE) {
    return {value: action.value}
  }

  return state;
};
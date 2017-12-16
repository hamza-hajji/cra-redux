import {SET_VALUE} from "../constants";
// TODO: IMPLEMENT ALL ACTIONS AND EXPORT THEM

export const setValue = value => {
  return (dispatch) => {
    dispatch({
      type: SET_VALUE,
      value
    });
  };
};
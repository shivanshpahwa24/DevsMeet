import { SET_ALERT, REMOVE_ALERT } from "./types";
import { v4 as uuid } from "uuid";

export const setAlert = (msg, alertType, timeout = 5000) => (dispatch) => {
  //We are able to use two arrows because of thunk
  const id = uuid();
  dispatch({
    type: SET_ALERT,
    payload: { msg, alertType, id },
  });

  setTimeout(() => dispatch({ type: REMOVE_ALERT, payload: id }), timeout);
  //For removing the alert after 5 seconds otherwise it will stay on screen
};

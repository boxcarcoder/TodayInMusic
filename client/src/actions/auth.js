import { STORE_ACCESS_TOKEN, AUTH_ERROR } from "./types";

export const storeAccessToken = (accessToken) => async (dispatch) => {
  try {
    dispatch({
      type: STORE_ACCESS_TOKEN,
      payload: accessToken,
    });
  } catch (err) {
    console.log("front end error fetching.");
    dispatch({
      type: AUTH_ERROR,
      payload: { msg: err.res.statusText, status: err.res.status },
    });
  }
};

import { RETRIEVE_ALBUMS, ALBUMS_ERROR } from "./types";
import axios from "axios";

export const getAllAlbums = () => async (dispatch) => {
  try {
    // *** Here is where we are sending the get request to /api/albums.
    // here is where we should be sending the access token
    // either from the req params or query.
    // *** Won't have to get access token from params or query if we send
    // the access token somewhere else. Right now the backend is sending
    // the access token to the url as a query.
    const res = await axios.get("/api/albums");

    dispatch({
      type: RETRIEVE_ALBUMS,
      payload: res.data,
    });
  } catch (err) {
    console.log("front end error fetching.");
    dispatch({
      type: ALBUMS_ERROR,
      payload: { msg: err.res.statusText, status: err.res.status },
    });
  }
};

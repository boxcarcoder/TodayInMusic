import { RETRIEVE_ALBUMS, ALBUMS_ERROR } from "./types";
import axios from "axios";

export const getAllAlbums = (accessToken) => async (dispatch) => {
  try {
    // Send the request, to get all albums, to the backend with the access token.
    let options = {
      // prettier-ignore
      headers: { 'Authorization': accessToken },
      json: true,
    };

    console.log("sent out action");
    const res = await axios.get("/api/albums", options);

    console.log("got data back from spotify");
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

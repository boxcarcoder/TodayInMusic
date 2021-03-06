import {
  RETRIEVE_ALBUMS,
  ALBUMS_ERROR,
  LAST_ALBUM_RETRIEVED,
  CLEAR_ALBUMS,
  SET_INITIAL_CURR_YEAR,
} from "./types";
import axios from "axios";

export const getAllAlbums = (accessToken, decade) => async (dispatch) => {
  try {
    // Set the initial currYear state for the frontend's Albums component's subheader.
    dispatch({
      type: SET_INITIAL_CURR_YEAR,
      payload: decade,
    });

    // Send the request, to get all albums, to the backend with the access token.
    let options = {
      // prettier-ignore
      headers: { 'Authorization': accessToken },
      json: true,
    };

    // Fetch all albums from each year within a requested decade
    for (let year = decade; year < decade + 10; year++) {
      // Make a request to my backend.
      const res = await axios.get(`/api/albums/${year}`, options);

      dispatch({
        type: RETRIEVE_ALBUMS,
        payload: { albums: res.data, currYear: year },
      });
    }

    dispatch({
      type: LAST_ALBUM_RETRIEVED,
    });
  } catch (err) {
    console.log("getAllAlbums action error fetching.");
    dispatch({
      type: ALBUMS_ERROR,
      payload: { msg: err.res.statusText, status: err.res.status },
    });
  }
};

export const clearAllAlbums = () => async (dispatch) => {
  try {
    dispatch({
      type: CLEAR_ALBUMS,
    });
  } catch (err) {
    console.log("clearAllAlbums action error.");
    dispatch({
      type: ALBUMS_ERROR,
      payload: { msg: err.res.statusText, status: err.res.status },
    });
  }
};

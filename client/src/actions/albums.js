import {
  RETRIEVE_ALBUMS,
  ALBUMS_ERROR,
  LAST_ALBUM_RETRIEVED,
  CLEAR_ALBUMS,
} from "./types";
import axios from "axios";

export const getAllAlbums = (accessToken, decade) => async (dispatch) => {
  try {
    // Send the request, to get all albums, to the backend with the access token.
    let options = {
      // prettier-ignore
      headers: { 'Authorization': accessToken },
      json: true,
    };

    // Fetch all albums from each year within a requested decade
    for (let year = decade; year < decade + 10; year++) {
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

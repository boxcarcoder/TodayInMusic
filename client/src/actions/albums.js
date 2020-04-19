import { RETRIEVE_ALBUMS, ALBUM_ERROR } from "./types";
import axios from "axios";

export const getAllAlbums = () => async (dispatch) => {
  try {
    const res = await axios.get("/api/albums");

    dispatch({
      type: RETRIEVE_ALBUMS,
      payload: res.data,
    });
  } catch {
    dispatch({
      type: ALBUM_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status },
    });
  }
};

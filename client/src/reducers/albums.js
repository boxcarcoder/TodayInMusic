import {
  RETRIEVE_ALBUMS,
  ALBUMS_ERROR,
  LAST_ALBUM_RETRIEVED,
} from "../actions/types";

const initialState = {
  albums: [],
  loading: true,
  error: {},
  finalLoad: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_ALBUMS:
      return {
        ...state,
        albums: payload.concat(...state.albums), //append more albums to the list of albums
        loading: false,
      };
    case LAST_ALBUM_RETRIEVED:
      return {
        ...state,
        finalLoad: true,
      };
    case ALBUMS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}

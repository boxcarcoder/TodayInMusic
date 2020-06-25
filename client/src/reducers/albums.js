import {
  RETRIEVE_ALBUMS,
  ALBUMS_ERROR,
  LAST_ALBUM_RETRIEVED,
  CLEAR_ALBUMS,
  SET_INITIAL_CURR_YEAR,
} from "../actions/types";

const initialState = {
  albums: [],
  loading: true,
  error: {},
  finalLoad: false,
  currYear: 0,
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_ALBUMS:
      return {
        ...state,
        albums: payload.albums.concat(...state.albums), //append more albums to the list of albums
        loading: false,
        currYear: payload.currYear,
      };
    case LAST_ALBUM_RETRIEVED:
      return {
        ...state,
        finalLoad: true,
      };
    case CLEAR_ALBUMS:
      return {
        ...state,
        albums: [],
        loading: true,
        finalLoad: false,
        currYear: 0,
      };
    case ALBUMS_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case SET_INITIAL_CURR_YEAR:
      return {
        ...state,
        currYear: payload,
      };
    default:
      return state;
  }
}

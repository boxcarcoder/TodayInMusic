import { RETRIEVE_ALBUMS, ALBUMS_ERROR } from "../actions/types";

const initialState = {
  albums: [],
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case RETRIEVE_ALBUMS:
      return {
        ...state,
        albums: payload,
        loading: false,
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

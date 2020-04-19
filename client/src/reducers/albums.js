import { RETRIEVE_ALBUMS, ALBUM_ERROR } from "../actions/types";

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

    default:
      return state;
  }
}

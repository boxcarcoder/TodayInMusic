import { STORE_ACCESS_TOKEN, AUTH_ERROR } from "../actions/types";

const initialState = {
  token: "",
  loading: true,
  error: {},
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case STORE_ACCESS_TOKEN:
      return {
        ...state,
        token: payload,
        loading: false,
      };
    case AUTH_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };

    default:
      return state;
  }
}

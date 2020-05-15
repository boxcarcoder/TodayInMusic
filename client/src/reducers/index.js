import { combineReducers } from "redux";
import albums from "./albums.js";
import auth from "./auth.js";

export default combineReducers({ albums, auth });

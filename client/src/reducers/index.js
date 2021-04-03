import { combineReducers } from "redux";
//for multiple reduers
import alert from "./alert";
import auth from "./auth";
import profile from "./profile";

export default combineReducers({ alert, auth, profile });
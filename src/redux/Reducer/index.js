import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import saveReducer from "./saveReducer";
import fetchReducer from "./fetchReducer";

export let rootReducer=combineReducers({counterReducer,saveReducer,fetchReducer})
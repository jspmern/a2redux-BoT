import { combineReducers } from "redux";
import counterReducer from "./counterReducer";
import saveReducer from "./saveReducer";

export let rootReducer=combineReducers({counterReducer,saveReducer})
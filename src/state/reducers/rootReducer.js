import { combineReducers } from "redux";
import { fimlReducer } from "./filmReducer";

export const rootReducer=combineReducers({
    filmData:fimlReducer
})
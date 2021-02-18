import { combineReducers } from "redux";

import user from "./user";
import lang from "./lang";

const rootReducer = combineReducers({ user, lang });

export default rootReducer;

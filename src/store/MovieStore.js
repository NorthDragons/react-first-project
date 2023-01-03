import {legacy_createStore as createStore} from "redux";
import {movieReducer} from "./reducers/MovieReducer";
import {composeWithDevTools} from "redux-devtools-extension";

export const store = createStore(movieReducer, composeWithDevTools());

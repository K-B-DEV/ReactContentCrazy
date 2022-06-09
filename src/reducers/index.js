import { combineReducers } from "redux";
import movieReducer from "./movieReducer";
import tvReducer from "./tvReducer";
import toggleReducer from "./toggleReducer";
import movieDetailReducer from "./movieDetailReducer";
import tvDetailsReducer from "./tvDetailReducer";

const rootReducer = combineReducers({
  movies: movieReducer,
  tvs: tvReducer,
  toggle: toggleReducer,
  movieDetails: movieDetailReducer,
  tvDetails: tvDetailsReducer,
});

export default rootReducer;

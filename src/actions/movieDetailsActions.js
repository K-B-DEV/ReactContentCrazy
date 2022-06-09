import axios from "axios";
import { movie_detailsURL } from "../api";

//Action Creator
export const loadMovieDetails = (movie_id) => async (dispatch) => {
  //FETCH AXIOS
  const movieDetails = await axios.get(movie_detailsURL(movie_id));
  dispatch({
    type: "GET_MOVIE_DETAILS",
    payload: {
      movie_details: movieDetails.data,
    },
  });
};

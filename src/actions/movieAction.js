import axios from "axios";
import {
  popular_moviesURL,
  top_rated_moviesURL,
  similar_moviesURL,
  recommended_moviesURL,
  upcoming_moviesURL,
  now_playing_moviesURL,
} from "../api";

//Action Creator
export const loadMovies = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popular_moviesURL());
  const topRatedData = await axios.get(top_rated_moviesURL());
  const upcomingData = await axios.get(upcoming_moviesURL());
  const nowPlayingData = await axios.get(now_playing_moviesURL());
  dispatch({
    type: "GET_MOVIES",
    payload: {
      popular_movies: popularData.data.results,
      top_rated_movies: topRatedData.data.results,
      upcoming_movies: upcomingData.data.results,
      now_playing_movies: nowPlayingData.data.results,
    },
  });
};

export const loadSimilarMovies = (movie_id) => async (dispatch) => {
  const similarData = await axios.get(similar_moviesURL());
  const recommendedData = await axios.get(recommended_moviesURL());

  dispatch({
    type: "GET_RELATED_MOVIES",
    payload: {
      similar_movies: similarData,
      recommended_movies: recommendedData,
    },
  });
};

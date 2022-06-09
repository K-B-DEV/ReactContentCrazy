import axios from "axios";
import {
  popular_tvURL,
  top_rated_tvURL,
  similar_tvURL,
  recommended_tvURL,
  latest_tvURL,
  airing_today_tvURL,
} from "../api";

//Action Creator
export const loadTv = () => async (dispatch) => {
  //FETCH AXIOS
  const popularData = await axios.get(popular_tvURL());
  const topRatedData = await axios.get(top_rated_tvURL());
  const airingTodayData = await axios.get(airing_today_tvURL());
  const latestData = await axios.get(latest_tvURL());
  dispatch({
    type: "GET_TV",
    payload: {
      popular_tv: popularData.data.results,
      top_rated_tv: topRatedData.data.results,
      latest_tv: latestData.data.results,
      airing_today_tv: airingTodayData.data.results,
    },
  });
};

export const loadSimilarTv = (movie_id) => async (dispatch) => {
  const similarData = await axios.get(similar_tvURL());
  const recommendedData = await axios.get(recommended_tvURL());

  dispatch({
    type: "GET_RELATED_TV",
    payload: {
      similar_tv: similarData,
      recommended_tv: recommendedData,
    },
  });
};

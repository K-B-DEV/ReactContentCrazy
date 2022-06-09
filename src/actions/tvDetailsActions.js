import axios from "axios";
import { tv_detailsURL } from "../api";

//Action Creator
export const loadTvDetails = (tv_id) => async (dispatch) => {
  //FETCH AXIOS
  const tvDetails = await axios.get(tv_detailsURL(tv_id));
  dispatch({
    type: "GET_TV_DETAILS",
    payload: {
      tv_details: tvDetails.data,
    },
  });
};

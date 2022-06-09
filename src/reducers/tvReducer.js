const initialState = {
  popular_tv: {},
  top_rated_tv: {},
  similar_tv: {},
  recommended_tv: {},
  latest_tv: {},
  airing_today_tv: {},
  isLoading: true,
};

const tvReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TV":
      return {
        ...state,
        popular_tv: action.payload.popular_tv,
        top_rated_tv: action.payload.top_rated_tv,
        latest_tv: action.payload.latest_tv,
        airing_today_tv: action.payload.airing_today_tv,
        isLoading: false,
      };
    case "GET_RELATED_TV":
      return {
        ...state,
        similar_tv: action.payload.similar_tv,
        recommended_tv: action.payload.recommended_tv,
      };
    case "LOADING_TV":
      return {
        ...state,
        isLoading: true,
      };
    default:
      return {
        ...state,
      };
  }
};

export default tvReducer;

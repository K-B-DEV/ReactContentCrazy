const initialState = {
  popular_movies: {},
  top_rated_movies: {},
  similar_movies: {},
  recommended_movies: {},
  upcoming_movies: {},
  now_playing_movies: {},
  isLoading: true,
};

const movieReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIES":
      return {
        ...state,
        popular_movies: action.payload.popular_movies,
        top_rated_movies: action.payload.top_rated_movies,
        upcoming_movies: action.payload.upcoming_movies,
        now_playing_movies: action.payload.now_playing_movies,
        isLoading: false,
      };
    case "GET_RELATED_MOVIES":
      return {
        ...state,
        similar_movies: action.payload.similar_movies,
        recommended_movies: action.payload.recommended_movies,
      };
    case "LOADING_MOVIE":
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

export default movieReducer;

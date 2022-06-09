const initialState = {
  movie_details: {},
};

const movieDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_MOVIE_DETAILS":
      return {
        movie_details: action.payload.movie_details,
      };
    default:
      return {
        ...state,
      };
  }
};

export default movieDetailReducer;

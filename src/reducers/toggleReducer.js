const initialState = {
  isMovies: true,
};

const toggleReducer = (state = initialState, action) => {
  switch (action.type) {
    case "TOGGLE_MOVIE":
      return {
        ...state,
        isMovies: true,
      };
    case "TOGGLE_TV":
      return {
        ...state,
        isMovies: false,
      };
    default:
      return {
        ...state,
      };
  }
};

export default toggleReducer;

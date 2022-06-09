//Action Creator
export const toggleMovies = () => async (dispatch) => {
  dispatch({
    type: "TOGGLE_MOVIE",
    payload: {
      isMovies: true,
    },
  });
};

export const toggleTv = () => async (dispatch) => {
  dispatch({
    type: "TOGGLE_TV",
    payload: {
      isMovies: false,
    },
  });
};

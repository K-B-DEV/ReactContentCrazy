const initialState = {
  tv_details: {},
  isLoading: true,
};

const tvDetailsReducer = (state = initialState, action) => {
  switch (action.type) {
    case "GET_TV_DETAILS":
      return {
        ...state,
        tv_details: action.payload.tv_details,
        isLoading: false,
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

export default tvDetailsReducer;

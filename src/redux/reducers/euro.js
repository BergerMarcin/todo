import {FETCHING_START, FETCHING_DONE, FETCHING_ERROR} from '../actions/euroActions';


const initialState = {
  loading: false,
  result: {
    buyRate: 0,
    sellRate: 0,
  },
  error: "",
};

const euro = (state = initialState, action) => {
  switch (action.type) {
    case (FETCHING_START):
      return ({
        ...state,
        loading: true,
      });
    case (FETCHING_DONE):
      return {
        ...state,
        loading: false,
        result: action.payload,
        error: "",
      };
    case (FETCHING_ERROR):
      return {
        ...state,
        loading: false,
        result: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default euro;

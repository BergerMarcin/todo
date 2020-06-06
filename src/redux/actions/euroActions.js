import api from "../../api";

const FETCHING_START = "FETCHING_START";
const FETCHING_DONE = "FETCHING_DONE";
const FETCHING_ERROR = "FETCHING_ERROR";

const fetchingStart = () => ({
  type: FETCHING_START
});

const fetchingDone = (result) => ({
  type: FETCHING_DONE,
  payload: result,
});

const fetchingError = (error) => ({
  type: FETCHING_ERROR,
  payload: error,
});


const getEuroRates = () => (dispatch) => {
  dispatch(fetchingStart());
  api.euroRates()
    .then(response => dispatch(fetchingDone(response)))
    .catch(err => dispatch(fetchingError(err)));
};


export {FETCHING_START, FETCHING_DONE, FETCHING_ERROR,
  fetchingStart, fetchingDone, fetchingError, getEuroRates};

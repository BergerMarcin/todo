const FETCHING_START = "FETCHING_START";
const FETCHING_DONE = "FETCHING_DONE";
const FETCHING_ERROR = "FETCHING_ERROR";


const fetchingStart = () => ({
  type: FETCHING_START
});

const fetchingDone = (apiResponseJson,) => ({
  type: FETCHING_DONE,
  payload: {
    buyRate: apiResponseJson.rates[0].bid,
    sellRate: apiResponseJson.rates[0].ask,
  },
});

const fetchingError = (apiError) => ({
  type: FETCHING_ERROR,
  payload: apiError,
});


export {
  FETCHING_START, FETCHING_DONE, FETCHING_ERROR,
  fetchingStart, fetchingDone, fetchingError
};

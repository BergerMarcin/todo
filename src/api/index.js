import {fetchingDone, fetchingError, fetchingStart} from "../redux/actions/euroActions";

export const API_DATA = {
  euroRates: 'https://api.nbp.pl/api/exchangerates/rates/c/eur/?format=json',
};

export const api = {
  getEuroRates: () => (dispatch) => {
    dispatch(fetchingStart());
    fetch(API_DATA.euroRates)
      .then(response => response.json())
      .then(json => dispatch(fetchingDone(json)))
      .catch(err => dispatch(fetchingError(err)));
  },
};

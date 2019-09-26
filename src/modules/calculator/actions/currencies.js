import {
  GET_CURRENCY_LIST_REQUEST,
  GET_CURRENCY_LIST_SUCCESS,
  GET_CURRENCY_LIST_FAILURE
} from "../actionTypes/currencies";

import { getAllCurrencies } from "../services/currencies";

export const getCurrencies = () => dispatch => {
  const params = "start=0&limit=30";
  dispatch({
    type: GET_CURRENCY_LIST_REQUEST
  });
  getAllCurrencies(params)
    .then(data => {
      dispatch({
        type: GET_CURRENCY_LIST_SUCCESS,
        payload: data.data
      });
    })
    .catch(err => {
      dispatch({
        type: GET_CURRENCY_LIST_FAILURE,
        payload: err
      });
    });
};

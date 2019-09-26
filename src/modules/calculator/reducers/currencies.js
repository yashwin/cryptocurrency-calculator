import {
  GET_CURRENCY_LIST_REQUEST,
  GET_CURRENCY_LIST_SUCCESS,
  GET_CURRENCY_LIST_FAILURE
} from "../actionTypes/currencies";

const initialState = {
  isFetchingCurrencies: false,
  currencyList: [],
  errorMessage: ""
};

const currencies = (state = initialState, action) => {
  switch (action.type) {
    case GET_CURRENCY_LIST_REQUEST:
      return {
        ...state,
        isFetchingCurrencies: true
      };
    case GET_CURRENCY_LIST_SUCCESS:
      return {
        ...state,
        isFetchingCurrencies: false,
        currencyList: action.payload
      };
    case GET_CURRENCY_LIST_FAILURE:
      return {
        ...state,
        isFetchingCurrencies: false,
        errorMessage: action.payload
      };
    default:
      return state;
  }
};

export default currencies;
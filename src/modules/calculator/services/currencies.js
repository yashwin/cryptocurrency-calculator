import { CURRENCY_LIST_URL } from "../../../config/service";
import { getApiService, WEB_REQUEST_TYPE } from "../../../helpers/apiService";

export const getAllCurrencies = params => {
  return getApiService(WEB_REQUEST_TYPE.GET, CURRENCY_LIST_URL + "?" + params)
    .then(response => {
      const { data } = response;
      return data;
    })
    .catch(error => {
      return error;
    });
};

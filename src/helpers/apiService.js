import axios from "axios";
import {API_BASE_PATH} from '../config/service';
export const WEB_REQUEST_TYPE = { POST: "POST", GET: "GET", DELETE: "DELETE", PUT: "PUT" };
/**
 * Method for handling all api call to the server
 * @param method
 * @param url
 * @param params
 */
axios.interceptors.response.use((response) => {
  return response;
}, error => {
  return Promise.reject(error.response);
});

export const getApiService = ( method, url) => {
  return axios({
    method: method,
    url: url,
    baseURL: API_BASE_PATH,
    headers: {
      "Content-Type": "application/json"
    }
  })
    .then(response => {
      return response;
    })
    .catch(error => {
      throw JSON.stringify(error);
    });
};
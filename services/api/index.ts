import { forEndpoints } from '@ginterdev/endpoints';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import { camelizeKeys, decamelizeKeys } from 'humps';
import { Endpoints } from '../../types/api';



export const getAuthorizationHeader = (accessToken: string) => {
  return `JWT ${accessToken.replaceAll('"', '')}`;
};

const axiosInstance = axios.create({
  baseURL: process.env.REACT_APP_API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

axiosInstance.interceptors.response.use((response: AxiosResponse<object>) => {
  // Axios middleware to convert all api responses to camelCase
  if (
    response.data &&
    response.headers['content-type'] === 'application/json'
  ) {
    response.data = camelizeKeys(response.data);
  }

  return response;
});

axiosInstance.interceptors.request.use((config: AxiosRequestConfig) => {
  const headers = { ...config.headers };

  // Axios middleware to convert all api requests to snake_case
  if (config.params) {
    config.params = decamelizeKeys(config.params);
  }

  if (config.data) {
    config.data = decamelizeKeys(config.data);
  }


  return {
    ...config,
    headers,
  };
});

const api = forEndpoints<Endpoints>(axiosInstance);

export default api;

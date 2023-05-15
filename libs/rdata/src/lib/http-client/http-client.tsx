import axios, { AxiosResponse, HeadersDefaults } from 'axios';

export const checkStatus = (response: AxiosResponse) => {
  if (response && response.status >= 400) {
    throw new Error(`Network response was not ok ${response.statusText}`);
  }
};

const HTTPClient = axios.create();

// If default backend
//HTTPClient.defaults.baseURL = `${process.env['NX_SERVER_URL']}`;

/*
type headers = {
  'Content-Type': string;
  Accept: string;
  'X-Authentication': string;
  Authorization: string;
};

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
} as headers & HeadersDefaults;

// Adding Authorization header for all requests
axiosClient.interceptors.request.use(
  (config) => {
    const authenticationToken = useUserStore.getState().authenticationToken;    
    if (config.headers) {
      if (authenticationToken) {
        // Configure this as per your backend requirements
        config.headers['X-Authentication'] = `Bearer ${authenticationToken}`;
      }
      if (authorisationToken) {
        // Configure this as per your backend requirements
        config.headers['Authorization'] = `Bearer ${authorisationToken}`;
      }
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
*/
export default HTTPClient;

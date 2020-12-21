import axios from "axios";
import queryString from "query-string";


const axiosClient = axios.create({
  baseURL: "http://api.dev.letstudy.org",
  headers: {
    "content-type": "application/json",
  },
  paramsSerializer: (params) => queryString.stringify(params),
});

// Handle request
axiosClient.interceptors.request.use((config) => {
  // ..Handle token
  
  return config;
},(error)=>{
  return Promise.reject(error);
}
);

// Handle response
axiosClient.interceptors.response.use(
  (response) => {
    if (response && response.data) {
      return response.data;
    }

    return response;
  },
  (error) => {
    // ..Handle error

    return error;
  }
);

export default axiosClient;

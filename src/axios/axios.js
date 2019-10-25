import axios from 'axios';
 
/* export default axios.create({
    baseURL: 'http://localhost:8080/api'
}); */

const axiosInstance = axios.create({
    baseURL: 'localhost:8080'
  })
/*   axiosInstance.interceptors.request.use(
    request => requestHandler(request)
  );
  axiosInstance.interceptors.response.use(
    response => successHandler(response),
    error => errorHandler(error)
  ) */
axiosInstance.interceptors.request.use(config => {
    // perform a task before the request is sent
    console.log('Request was sent');
  
    return config;
  }, error => {
    // handle the error
    return Promise.reject(error);
  });
  export default axiosInstance;
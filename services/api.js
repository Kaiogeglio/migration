import axios from 'axios';
import Cookies from 'js-cookie';

const api = axios.create({
  // baseURL: "https://admin-portal-over.herokuapp.com"
  baseURL: "http://localhost:8080"
})

api.interceptors.request.use(async config => {

  let response = Cookies.get("over_token");

  if(response) {
    var token = `Bearer ${response}`;
    config.headers.Authorization = token;
  } else {
    var token = `Beaer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYwM2ZiMTIyNjYwMzA2MWVkMDE4MGIzYyIsImlhdCI6MTYxNDk2MTk2OCwiZXhwIjoxNjE0OTgzNTY4fQ.9cVYrezpLMGJrs-xoPWVDL0qZIaAnWnDCKea5-5Soh0`;
    config.headers.Authorization = token;
  }
  return config;
})

export default api;
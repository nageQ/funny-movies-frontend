import axios from "axios";

axios.interceptors.request.use(
  function (config) {
    config.headers = { "Access-Control-Allow-Origin": "*" };
    const TOKEN = localStorage.getItem("TOKEN");
    if (TOKEN) {
      config.headers.Authorization = "Bearer " + TOKEN;
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    if (error.response) {
    }

    return Promise.reject(error);
  }
);

import axios, { AxiosRequestConfig } from "axios";

const httpInstance = () => {
  const request = axios.create({
    baseURL: process.env.API_URL,
    timeout: 1000 * 5,
    headers: {
      "Content-Type": "application/json",
    },
  });

  request.interceptors.response.use(
    (response) => {
      response.data = {
        data: response.data,
        status: response.status,
      };
      return response;
    },
    (error) => {
      console.log(error);
      return {
        data: null,
        statusCode: error.response.status,
      };
    }
  );

  return request;
};
export default httpInstance;

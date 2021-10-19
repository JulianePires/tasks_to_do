import axios from "axios";
import { getToken } from "./authenticated";

const BASE_URL = process.env.NEXT_PUBLIC_AZURE;

export const api = axios.create({
  baseURL: BASE_URL,
  timeout: 60000,
  headers: {
    "content-type": "application/json",
    Accept: "application/json",
  },
});

api.interceptors.request.use(
  async function (config) {
    let token = getToken();

    if (token !== null) {
      config.headers = {
        Authorization: `Bearer ${token}`,
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers":
          "Origin, X-Requested-With, Content-Type, Accept, Authorization",
      };
    }

    return config;
  },
  function (error) {
    return Promise.reject(error);
  }
);

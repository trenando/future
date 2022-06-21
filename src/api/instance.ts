import axios, { AxiosInstance } from "axios";

export const axiosInstance = (path: string) => {
  const instance: AxiosInstance = axios.create({
    baseURL: `https://www.googleapis.com/books/v1/${path}`,
  });

  return instance;
};

export const API_KEY = "AIzaSyDpzbPHyNOqC9EPl0De9bO33Ojg-A9uDQk";
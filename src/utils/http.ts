import axios from "axios";
import { ICountry } from "../common/interfaces/ICountry";

const http = axios.create({
  baseURL: 'https://restcountries.com/v3.1/',
  headers: {
    Accept: 'application/json',
    Content: 'application/json'
  }
});

export const getApi = (endpoint: string) => {
  return async () => {
    const response = await http.get<ICountry[]>(endpoint);
    return response.data;
  };
};

export const getApiSearch = async (endpoint: string): Promise<ICountry[]> => {
  const response = await http.get<ICountry[]>(endpoint);
  return response.data;
};
import axios from "axios";
export const API_KEY = '8929fb6f2ee04e29a8260b741af55f80'
export const AxiosInstance = axios.create({
    baseURL: 'https://api.rawg.io/api'
});
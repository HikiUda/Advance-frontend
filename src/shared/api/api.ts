import axios from 'axios';
import { USER__LOCALSTORAGE_KEY } from 'shared/const/localStorage';

export const $api = axios.create({
    baseURL: __API__,
});

$api.interceptors.request.use((config) => {
    if (config.headers) {
        config.headers.authorization = localStorage.getItem(USER__LOCALSTORAGE_KEY) || '';
    }
    return config;
});

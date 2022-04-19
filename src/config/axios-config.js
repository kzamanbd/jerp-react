// plugins/axios-http.js
import axios from 'axios';
// set default value on axios
const http = axios.create({
    baseURL: 'http://203.188.245.58:8889/',
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    },
});

http.interceptors.request.use(
    (config) => {
        // Do something before request is sent
        const request = config;
        const loggedUser = JSON.parse(localStorage.getItem('token')) || null;
        const token = loggedUser ? loggedUser.accessToken : false;
        if (token) {
            request.headers.common.Authorization = `Bearer ${token}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

http.interceptors.response.use(
    (response) => {
        if (response.status === 200 || response.status === 201) {
            return Promise.resolve(response);
        }
        return Promise.reject(response);
    },
    (error) => {
        if (error.response.status) {
            switch (error.response.status) {
                case 400:
                    console.error('Bad request');
                    break;
                case 401:
                    console.error('Unauthorized request');
                    break;
                case 403:
                    console.error('Access forbidden');
                    break;
                case 404:
                    console.error('URL not exists');
                    break;
                case 500:
                    console.error('Internal server error');
                    break;
                case 502:
                    console.error('Bad gateway');
                    break;
                default:
                    console.error('Unknown error');
            }
        }
        return Promise.reject(error.response);
    }
);

export default http;

import axios from 'axios';
import keys from '../config/env';
import jwtDecode from 'jwt-decode';
import dayjs from 'dayjs';

const baseURL = keys.host;
const axiosInstance = axios.create({
    baseURL,
});

axiosInstance.interceptors.request.use(async (req) => {
    const authToken = localStorage.getItem('token');
    if (!authToken) {
        throw new axios.Cancel('login needed');
    }
    const user = jwtDecode(authToken.split(' ')[1]);
    if (!user) {
        localStorage.removeItem('token');
    }
    const isExpired = dayjs.unix(user.exp).diff(dayjs()) < 1;
    if (isExpired) {
        localStorage.removeItem('token');
        throw new axios.Cancel('token expired');
    }
    req.headers.Authorization = `${authToken}`;
    return req;
});
axiosInstance.interceptors.response.use(
    (res) => {
        return res;
    },
    (err) => {
        if (err.response.status === 401) {
            localStorage.removeItem('token');
        }
        return Promise.reject(err);
    },
);
export default axiosInstance;

import axios from "axios";
import cookie from "react-cookies";

const BASE_URL = 'http://localhost:8085/SaleApp/';

export const endpoints = {
    'categories': '/api/categories/',
    'products': '/api/products/',
    'register': '/api/users/',
    'login': '/api/login/',
    'current-user': '/api/current-user/',
}

console.info(cookie.load('token'))

export const authApi = () => {
    return axios.create({
        baseURL: BASE_URL,
        headers: {
            'Authorization': cookie.load('token')
        }
    })
}

export default axios.create({
    baseURL: BASE_URL
});
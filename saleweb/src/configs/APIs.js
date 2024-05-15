import axios from "axios";

const BASE_URL = 'http://localhost:8085/SaleApp/';

export const endpoints = {
    'categories': '/api/categories/',
    'products': '/api/products/'
}

export default axios.create({
    baseURL: BASE_URL
});
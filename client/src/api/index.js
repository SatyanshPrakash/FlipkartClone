import axios from 'axios';

const url = 'https://flipkartclonesatyansh.herokuapp.com';
const API = axios.create({ baseURL: url || 'http://localhost:5000' });

API.interceptors.request.use((req) => {
    if(localStorage.getItem('profile')){
        req.headers.Authorization = `Bearer ${JSON.parse(localStorage.getItem('profile')).token}`;
    }
    return req;
});

export const signIn = (formData) => API.post('/user/signIn', formData);
export const signUp = (formData) => API.post('/user/signUp', formData);

export const getProducts = () => API.get('/');
export const getProductDetails = (id) => API.get(`/product/${id}`);
export const toCart = (id, userId) => API.post(`/cart/product/${id}/${userId}`);
export const fetchCartData = (userId) => API.get(`/cart/${userId}`);
export const removeItem = (id, userId) => API.post(`/cart/removeItem/${id}/${userId}`);

export const payUsingPaytm = (data) => API.post('/payment', data);

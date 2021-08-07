import * as api from '../api/index';

export const getProducts = () => async(dispatch) => {
    try{
        const { data } = await api.getProducts();
        dispatch({ type: 'PRODUCTS', payload: data });
    }catch(error) {
        console.log(error); 
    }
}

export const getProductDetails = (id) => async(dispatch) => {
    try{
        const { data } = await api.getProductDetails(id);
        dispatch({ type: 'PRODUCT_DETAIL', payload: data });
    }catch (error) {
        console.log(error);
    }
}

export const toCart = (id, userId) => async(dispatch) => {
    try{
        api.toCart(id, userId); 
    }catch(error) {
        console.log(error);
    }
}

export const fetchCartData = (userId) => async(dispatch) => {
    try{
        const { data } = await api.fetchCartData(userId);
        dispatch({ type: 'FETCH_CART_DATA', payload: data });
    }catch (error) {
        console.log(error);
    }
}

export const removeItem = (id, userId) => async(dispatch) => {
    try{
        api.removeItem(id, userId);
    }catch(error) {
        console.log(error);
    }
}

export const payUsingPaytm = async(data) => {
    try{
        const response = await api.payUsingPaytm(data);
        return response.data;
    }catch(error) {
        console.log(error);
    }
}
import { combineReducers } from "redux";
import auth from './Auth';
import product from "./Product";
import productData from './productDetails';
import cartCollection from './FetchCart'


export const reducers = combineReducers({ auth, product, productData, cartCollection });
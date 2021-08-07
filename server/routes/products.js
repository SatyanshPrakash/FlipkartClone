import express from "express";

import { product, productDetails, addToCart, fetchCart, removeItem, addPaymentGateway, paymentResponse } from '../controllers/product.js';

const router = express.Router();

router.get('/', product);
router.get('/product/:id', productDetails);
router.post('/cart/product/:id/:userId', addToCart);
router.get('/cart/:userId', fetchCart);
router.post('/cart/removeItem/:id/:userId', removeItem);



router.post('/payment', addPaymentGateway);
router.post('/callback', paymentResponse);


export default router;
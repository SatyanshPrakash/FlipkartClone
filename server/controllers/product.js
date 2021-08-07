import Products from "../models/products.js";
import cartItems from "../models/cartItems.js";
import paytmchecksum from '../paytm/PaytmChecksum.js';
import { paytmParams, paytmMerchantKey } from '../server.js';
import formidable from "formidable";
import https from 'https';


export const product = async (req, res) => {
    try{
        const products = await Products.find({})
        res.json(products);
    }catch (error) {
        res.status(500).json({ Message: "Something went wrong in product" });
    }
}

export const productDetails = async (req, res) => {
    try{
        const id = req.params.id;
        const productDetail = await Products.findOne({ id })
        res.status(200).json(productDetail);
    }catch (error) {
        res.status(500).json({ Message: "Something went wrong in productDetails" });
    }
}

export const addToCart = async (req, res) => {
    try{
        const id = req.params.id;
        const userId = req.params.userId;
        cartItems.create({ userId, id });
        res.status(200).json({ message: "success" });
    }catch (error) {
        res.status(500).json({ Message: "Something went wrong in addToCart" });
    }
}

export const fetchCart = async (req, res) => {
    try{
        const userId = req.params.userId;
        const items  = await cartItems.find({ userId });
        const item = items.map((x) => x.id);
        res.status(200).json(item);
    }catch (error) {
        res.status(500).json({ message: "Something went wrong in fetchCart" });
    }
}

export const removeItem = async(req, res) => {
    try{
        const id = req.params.id;
        const userId = req.params.userId;
        const item = await cartItems.findOneAndDelete({ userId, id });
        res.status(200).json({ message: "Great Success!" });
    }catch(error) {
        res.status(500).json({ message: "Something went wrong in removeItem" })
    }
}

export const addPaymentGateway = async(req, res) => {
    let paytmChecksum = await paytmchecksum.generateSignature(paytmParams, paytmMerchantKey);
    try{
        let params = {
            ...paytmParams, 'CHECKSUMHASH': paytmChecksum
        }
        res.json(params);
    }catch(error) {
        res.status(500).json({ message: 'Error in addPaymentGateway' })
    }
}

export const paymentResponse = async(req, res) => {
    const form = new formidable.IncomingForm();
    let paytmChecksum = req.body.CHECKSUMHASH;
    delete req.body.CHECKSUMHASH;

    var isVerifySignature = paytmchecksum.verifySignature(req.body, 'nW0xMbLi%4qk5nUv', paytmChecksum);

    if(isVerifySignature) {
        var paytmParams = {};
        paytmParams['MID'] = req.body.MID;
        paytmParams['ORDERID'] = req.body.ORDERID;

        paytmchecksum.generateSignature(paytmParams, 'nW0xMbLi%4qk5nUv').then(function(checksum){
            paytmParams['CHECKSUMHASH'] = checksum;

            var post_data = JSON.stringify(paytmParams);
            var options = {
                hostname: 'securegw-stage.paytm.in',
                port: 443,
                path: '/order/status',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Content-Length': post_data.length
                }
            };

            var response = "";
            var post_req = https.request(options, function(post_res) {
                post_res.on('data', function(chunk) {
                    response += chunk;
                });

                post_res.on('end', function() {
                    let result = JSON.parse(JSON.stringify(response));
                    res.redirect('https://compassionate-galileo-7b8c51.netlify.app/');
                });
            });
            post_req.write(post_data);
            post_req.end();
        })
    }else{
        console.log('Checksum Mismatched')
    }
} 
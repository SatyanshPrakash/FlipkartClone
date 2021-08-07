import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import bodyParser from 'body-parser';
import dotenv from 'dotenv';
import userRoutes from './routes/users.js';
import productsRoutes from './routes/products.js';
import defaultData from './default.js';
import { v4 as uuid } from 'uuid';

const app = express();
dotenv.config();

app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

app.use('/user', userRoutes);
app.use('/', productsRoutes);

const PORT = process.env.PORT || 5000;

await mongoose.connect(process.env.MONGODB_URI || process.env.CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
.then(() => app.listen(PORT, () => console.log(`Server is listening on port: ${PORT} `)))
.catch((error) => console.log(error));

mongoose.set('useFindAndModify', false);

defaultData();

export let paytmMerchantKey = process.env.PAYTM_MERCHANT_KEY;
export let paytmParams = {};
paytmParams['MID'] = process.env.PAYTM_MID,
paytmParams['WEBSITE'] = process.env.PAYTM_WEBSITE,
paytmParams['CHANNEL_ID'] = process.env.PAYTM_CHANNEL_ID,
paytmParams['INDUSTRY_TYPE_ID'] = process.env.PAYTM_INDUSTRY_TYPE_ID,
paytmParams['ORDER_ID'] = uuid(),
paytmParams['CUST_ID'] = process.env.PAYTM_CUST_ID,
paytmParams['TXN_AMOUNT'] = '100',
paytmParams['CALLBACK_URL'] = 'https://flipkartclonesatyansh.herokuapp.com/callback'
paytmParams['EMAIL'] = 'satyanshsinghv@gmail.com'
paytmParams['MOBILE_NO'] = '1234567890'
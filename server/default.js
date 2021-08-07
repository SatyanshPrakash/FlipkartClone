import { products } from './constants/products.js';
import Products from './models/products.js';

const defaultData = async () => {
    try{
        await Products.deleteMany({});
        await Products.insertMany(products);
    }catch (error) {
        console.log(error);
    }
}


export default defaultData;
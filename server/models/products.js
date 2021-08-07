import mongoose from "mongoose";

const ProductSchema = mongoose.Schema({
    id: String,
    url: String,
    detailUrl: String,
    title: Object,
    price: Object,
    description: String,
    discount: String,
    tagline: String
})

const Products = mongoose.model("products", ProductSchema);

export default Products;
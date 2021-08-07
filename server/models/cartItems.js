import mongoose from "mongoose";

const cartItemsSchema = mongoose.Schema({
    userId: {type:String, required: true },
    id: {type: String, unique: true, required: true}
})

const cartItems = mongoose.model("cartItems", cartItemsSchema);

export default cartItems;
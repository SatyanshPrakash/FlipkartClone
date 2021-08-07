const FetchCart = (state = { cartCollection: [] }, action) => {
    switch(action.type){
        case 'FETCH_CART_DATA':
            return { cartCollection: action.payload };
        default:
            return state;
    }
}

export default FetchCart;
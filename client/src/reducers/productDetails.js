const productDetailReducer = ( state= { productDetail: {}}, action) => {
    switch(action.type) {
        case 'PRODUCT_DETAIL':
            return { productDetail: action.payload };
        default:
            return state;
    }
}

export default productDetailReducer;
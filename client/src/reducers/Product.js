const productReducer = (state = { productData: [] }, action) => {
    switch(action.type) {
        case 'PRODUCTS':
            return{ productData: action.payload }
        default:
            return state;
    }
}

export default productReducer;
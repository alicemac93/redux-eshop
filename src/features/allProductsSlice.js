export const loadProducts = (inventory) => {
    return {
        type: 'AllProducts/loadProducts',
        payload: inventory
    }
}

export const searchedProducts = (name) => {
    return {
        type: 'AllProducts/searchedProducts',
        payload: name
    }
}

const initialState = []
export const AllProductsReducer = (AllProducts = initialState, action) => {
    switch (action.type) {
        case 'AllProducts/loadProducts':
            return action.payload;
        case 'AllProducts/searchedProducts':
            return AllProducts.filter(products => products.name.toLowerCase().includes(action.payload.toLowerCase()))
        default:
            return AllProducts;
    }
}

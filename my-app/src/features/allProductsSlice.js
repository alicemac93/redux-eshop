export const loadProducts = (inventory) => {
    return {
        type: 'AllProducts/loadProducts',
        payload: inventory
    }
}
const initialState = []

export const AllProductsReducer = (AllProducts = initialState, action) => {
    switch (action.type) {
        case 'AllProducts/loadProducts':
            return action.payload;

        default:
            return AllProducts;
    }
}

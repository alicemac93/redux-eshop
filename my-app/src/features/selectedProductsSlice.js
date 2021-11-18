export const handleCartSelection = (product) => {
    console.log(product)
    return {
        type: 'selectProduct/SelectedProducts',
        payload: product
    }
}

const initialState = [];
export const SelectedProductsReducer = (SelectedProducts = initialState, action) => {
    switch (action.type) {
        case 'selectProduct/SelectedProducts':
            //   console.log("here", store.getState());;
            return [...SelectedProducts, action.payload];
        case 'unselectProduct/SelectedProducts':
            console.log(SelectedProducts);
            return SelectedProducts.filter(id => id !== action.payload)

        default:
            return SelectedProducts
    }
}
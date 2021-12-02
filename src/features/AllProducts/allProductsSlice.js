import { createSlice } from "@reduxjs/toolkit";
import { selectSearchTerm } from "../SearchTerm/SearchTermSlice";
import { selectFiltered } from "../Filter/FilterSlice";


/* 
export const allProductsSlice = createSlice({
    name: 'allProducts',
    initialState: 'yes',
    reducers: {
        loadProducts: (state, action) => {
            state.push('hello')
            // state.push(action.payload);
        }
    }
});

 */
export const loadProducts = (inventory) => {
    return {
        type: 'allProducts/loadProducts',
        payload: inventory
    }
}

export const AllProductsReducer = (allProducts = [], action) => {
    switch (action.type) {
        case 'allProducts/loadProducts':
            return action.payload;
        default:
            return allProducts;
    }
}


// selectors
export const selectAllProducts = state => state.allProducts
export const selectFilteredProducts = (state) => {
    const allProducts = selectAllProducts(state)
    const filter = selectFiltered(state);

    if (filter === 'all') {
        return allProducts;
    }

    return allProducts.filter(products =>
        products.category === filter)
}
export const selectSearchedProducts = (state) => {
    const allProducts = selectAllProducts(state)
    const searchTerm = selectSearchTerm(state)

    return allProducts.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase()))
}

// exports
// export const { loadProducts } = allProductsSlice.actions;
// export default allProductsSlice.reducer;

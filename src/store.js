import { createStore, combineReducers } from 'redux';
import { AllProductsReducer } from './features/allProductsSlice';
import { CartReducer } from './features/Cart/selectedProductsSlice';
import { SearchTermReducer } from './features/SearchTerm/SearchTermSlice';

const rootReducer = {
    allProducts: AllProductsReducer,
    cart: CartReducer,
    searchTerm: SearchTermReducer
}


export const store = createStore(combineReducers(rootReducer))
import { createStore, combineReducers } from 'redux';
import { AllProductsReducer } from './features/AllProducts/allProductsSlice';
import { CartReducer } from './features/Cart/selectedProductsSlice';
import { SearchTermReducer } from './features/SearchTerm/SearchTermSlice';
import { FilterReducer } from './features/Filter/FilterSlice';

const rootReducer = {
    allProducts: AllProductsReducer,
    cart: CartReducer,
    searchTerm: SearchTermReducer,
    filter: FilterReducer
}


export const store = createStore(combineReducers(rootReducer))
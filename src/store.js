import { createStore, combineReducers } from 'redux';
import { AllProductsReducer } from './features/allProductsSlice';
import { CartReducer } from './features/Cart/selectedProductsSlice';

const rootReducer = {
    allProducts: AllProductsReducer,
    cart: CartReducer
}


export const store = createStore(combineReducers(rootReducer))
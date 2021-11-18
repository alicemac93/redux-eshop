import { createStore, combineReducers } from 'redux';
import { AllProductsReducer } from './features/allProductsSlice';
import { SelectedProductsReducer } from './features/selectedProductsSlice';

const rootReducer = {
    allProducts: AllProductsReducer,
    selectedProducts: SelectedProductsReducer
}


export const store = createStore(combineReducers(rootReducer))
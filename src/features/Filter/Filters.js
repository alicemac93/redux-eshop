import React from 'react';
import { useSelector, useDispatch } from 'react-redux';

import { setFilter } from './FilterSlice';
import { selectAllProducts } from '../AllProducts/allProductsSlice';

function Filters() {

    const dispatch = useDispatch();
    const products = useSelector(selectAllProducts);
    const categories = [...new Set(products.map(product => product.category))]

    const filtersHandler = (e) => {
        dispatch(setFilter(e.target.id))
    }

    return (
        <div className="filters">
            Categories:
            <ul>
                <li id='all' key='all' onClick={filtersHandler}>All</li>
                {categories.map(category =>
                    <li key={category} id={category} onClick={filtersHandler}>{category}</li>)}
            </ul>
        </div>
    )
}

export default Filters

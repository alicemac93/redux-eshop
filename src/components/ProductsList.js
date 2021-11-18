import React, { useEffect } from 'react'
import Product from './Product';
import { loadProducts } from '../features/allProductsSlice';


function Products({ products, dispatch }) {

    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch('https://fakestoreapi.com/products')
                if (response.ok) {
                    const jsonResponse = await response.json();
                    dispatch(loadProducts(jsonResponse))
                }
            } catch (error) {
                console.log(error)
            }
        };
        getData()
    }, [dispatch])

    return (
        <div className="products-container">
            {products.map(product =>
                <Product
                    dispatch={dispatch}
                    id={product.id}
                    key={product.id}
                    title={product.title}
                    imageSrc={product.image}
                    price={product.price}
                />
            )}
        </div>
    );
}


export default Products


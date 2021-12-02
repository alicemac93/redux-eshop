import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import Product from '../../components/Product';
import { selectSearchTerm } from '../SearchTerm/SearchTermSlice';
import { loadProducts, selectAllProducts, selectFilteredProducts, selectSearchedProducts } from './allProductsSlice';


function Products() {
    const dispatch = useDispatch();
    const allProducts = useSelector(selectAllProducts)
    const selectedProducts = useSelector(selectSearchedProducts);
    const filteredProducts = useSelector(selectFilteredProducts);

    const products = filteredProducts === allProducts ? selectedProducts : filteredProducts;

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


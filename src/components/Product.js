import React from 'react'
import { handleCartSelection } from '../features/Cart/selectedProductsSlice';

function Product(products) {

    const { title, imageSrc, price } = products
    const { dispatch } = products

    const handleSelection = (product) => {
        dispatch(handleCartSelection(product))
    }

    return (
        <article className="product-card">
            <img style={{ "height": "100px" }} src={imageSrc} alt="product" />
            <div className="product-card-info">
                <h3>{title}</h3>
                <p>{price} $</p>
            </div>
            <button className="addArticle" onClick={() => { handleSelection(products) }}>ADD TO CART</button>
        </article>
    );
}

export default Product

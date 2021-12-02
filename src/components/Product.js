import React from 'react'
import { handleCartSelection } from '../features/Cart/selectedProductsSlice';
import { useDispatch } from 'react-redux';

function Product(product) {
    const dispatch = useDispatch();
    const { title, imageSrc, price } = product


    const handleSelection = (product) => {
        dispatch(handleCartSelection(product))
    }

    return (
        <article className="product-card">
            <img style={{ "height": "100px" }} src={imageSrc} alt="product" />
            <div className="product-card-info">
                <h3>{title}</h3>
                <p className="product-card-info-price">{price} $</p>
            </div>
            <button className="addArticle" onClick={() => { handleSelection(product) }}>ADD TO CART</button>
        </article>
    );
}

export default Product

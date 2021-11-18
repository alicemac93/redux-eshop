import React from 'react'
import { handleCartSelection } from '../features/selectedProductsSlice';

function Product(props) {

    const { title, imageSrc, price, id, dispatch } = props

    const handleSelection = (id) => {
        dispatch(handleCartSelection(id))
    }

    return (
        <article className="product-card">
            <img style={{ "height": "100px" }} src={imageSrc} alt="product" />
            <div className="product-card-info">
                <h3>{title}</h3>
                <p>{price}</p>
            </div>
            <button className="addArticle" onClick={() => { handleSelection(id) }}>ADD TO CART</button>
        </article>
    )
}

export default Product


import React from 'react'

function Cart({ products }) {


    return (
        <div className="cart">
            <div className="cart-articles">
             {/*    {products.allProducts.map(product => products.SelectedProducts.includes(product.id))} */}
            </div>
            <p>TOTAL</p>
            <button>CHECKOUT</button>
        </div>
    )
}

export default Cart

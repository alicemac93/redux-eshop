import React from 'react'
import { handleItemDeletion } from './selectedProductsSlice';

const Ajv = require("ajv")
const ajv = new Ajv()

const schema = {
    type: "array",
    properties: {
        quantity: { type: "number" },
        price: { type: "number" }
    },
    required: ['quantity', 'price'],
    additionalProperties: false
}

function Cart({ cart, dispatch }) {

    const calculatedTotal = () => {
        let total;
        try {
            const values = Object.values(cart);
            const valid = ajv.validate(schema, values);
            if (!valid) {
                throw new ajv.errorsText()
            }
            const reducer = (previousValue, currentValue) => previousValue + currentValue;
            total = values.map(value => value.price * value.quantity).reduce(reducer);

        } catch (e) {
            console.log(e)
        }
        return total
    }

    const titles = Object.keys(cart);

    const handleItem = (product) => {
        dispatch(handleItemDeletion(product))
    }

    return (
        <div className="cart">
            <div className="cart-articles">
                {titles?.map(name =>
                    <li className='cart-item' key={name}>{name}
                        <span>{cart[name].price}</span>
                        <span>{cart[name].quantity}</span>
                        <button onClick={() => handleItem(name)}>X</button>
                    </li>)
                }
            </div>
            <p>{`TOTAL ${calculatedTotal()}`}</p>
            <button>CHECKOUT</button>
        </div>
    )
}

export default Cart

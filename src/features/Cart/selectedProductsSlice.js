export const handleCartSelection = (product) => {
    return {
        type: 'selectProduct/Cart',
        payload: product
    }
}

export const handleItemDeletion = (product) => {
    return {
        type: 'deleteItem/Cart',
        payload: product
    }
}

const initialState = [];
export const CartReducer = (Cart = initialState, action) => {
    switch (action.type) {
        case 'selectProduct/Cart':
            const { title, price } = action.payload;
            const quantity = Cart[title] ? Cart[title].quantity + 1 : 1;
            const newItem = { price, quantity };

            return {
                ...Cart,
                [title]: newItem
            }

        case 'deleteItem/Cart':
            const name = action.payload;
            const currentQuantity = Cart[name].quantity;
            let newQuantity;
            let newCart;

            if (currentQuantity > 0) {
                newQuantity = currentQuantity - 1;
                newCart = {
                    ...Cart,
                    [name]: {
                        quantity: newQuantity
                    }
                }
            }

            if (!newQuantity) {
                const { [name]: deletedObject, ...ajdustedObject } = Cart;
                newCart = ajdustedObject
            }

            return newCart


        default:
            return Cart
    }
}
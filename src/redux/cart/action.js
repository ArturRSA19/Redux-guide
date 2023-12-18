import CartActionTypes from "./action_types"

export const addProducToCart = (payload) => ({
    type: CartActionTypes.ADD_PRODUCT,
    payload
})

export const removeProductFromCart = (payload) => ({
    type: CartActionTypes.REMOVE_PRODUCT,
    payload
})

export const increaseProductQuantity = (payload) => ({
    type: CartActionTypes.INCREASE_PRODUCT,
    payload
})

export const decreaseProductQuantity = (payload) => ({
    type: CartActionTypes.DECREASE_PRODUCT,
    payload
})
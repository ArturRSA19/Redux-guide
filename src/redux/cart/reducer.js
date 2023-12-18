import CartActionTypes from "./action_types";

const initialState = {
    products : [],
}

const cartReducer = (state = initialState, action) => {

    switch(action.type) {
        case CartActionTypes.ADD_PRODUCT:
            //verificar se o produto já está no carrinho
            const productIsAlreadyInCart = state.products.find(product => product.id === action.payload.id);
            //se estiver, aumentar em 1
            if (productIsAlreadyInCart) {
                return {
                    ...state,
                    products: state.products.map((product) => 
                        product.id === action.payload.id 
                        ? {...product, quantity: product.quantity + 1}
                        : product
                    ),
                }
            }
            //se não estiver, adicionar ao carrinho
            return {
                ...state,
                products: [...state.products, {...action.payload, quantity: 1}],
            }

        case CartActionTypes.REMOVE_PRODUCT:
            return{
                ...state,
                products: state.products.filter(product => product.id !== action.payload),
            }

        case CartActionTypes.INCREASE_PRODUCT:
            return {
                ...state,
                products: state.products.map((product) => 
                    product.id === action.payload 
                    ? {...product, quantity: product.quantity + 1}
                    : product
                ),
            }
        case CartActionTypes.DECREASE_PRODUCT:
            return {
                ...state,
                products: state.products.map((product) => 
                    product.id === action.payload 
                    ? {...product, quantity: product.quantity - 1}
                    : product
                ).filter(product => product.quantity > 0),
            }
        default:
            return state;
    }

}

export default cartReducer;
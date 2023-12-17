import { ADD_CART_PROUDCT, START_CART_LOADING, END_CART_LOADING } from "../constants/cartConstant";
export const cartReducer = (state={isloading: true, cartItems:[]}, action)=>{
    switch(action.type){
        case START_CART_LOADING:
            return {
                ...state,
                isloading: true
            }
        case END_CART_LOADING:
            return {
                ...state,
                isloading: false
            }
        case ADD_CART_PROUDCT:
            const product = action.payload
            const existingItem = state.cartItems.find((p)=> p.id === product.id)
            if(existingItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map((p)=> p.id === existingItem.id ? product : p)
                }
            }
            else{
                return {
                    ...state,
                    cartItems: [...state.cartItems, product]
                }
            }
            default:
                return state;
    }
}
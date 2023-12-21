import { ADD_CART_PROUDCT, START_CART_LOADING, END_CART_LOADING, DELETE_CART_PRODUCT, ShippingAddressInfo} from "../constants/cartConstant";
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
            const existingItem = state.cartItems.find((p)=> p._id === product._id)
            if(existingItem){
                return {
                    ...state,
                    cartItems: state.cartItems.map((p)=> p._id === existingItem._id ? product : p)
                }
            }
            else{
                return {
                    ...state,
                    cartItems: [...state.cartItems, product]
                }
            }
        case DELETE_CART_PRODUCT:
            const deltedProduct = action.payload
            return {
                ...state,
                cartItems: state.cartItems.filter((p)=> p._id !== deltedProduct._id)
            }
        case ShippingAddressInfo: 
            return {
                ...state,
                ShippingInfo: action.payload
            }
            default:
                return state;
    }
    
}
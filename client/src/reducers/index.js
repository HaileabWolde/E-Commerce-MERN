import {combineReducers} from 'redux';
import { productReducer } from './productReducer'
import { cartReducer } from './cartReducer';
import { userReducer } from './userReducer';
import { orderReducer, orderPayReducer } from './orderReducer';
export default combineReducers({
    Allproducts : productReducer,
    cart: cartReducer,
    user: userReducer,
    order: orderReducer,
    orderPay: orderPayReducer
})
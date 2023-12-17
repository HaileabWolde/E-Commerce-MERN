import {combineReducers} from 'redux';
import { productReducer } from './productListing'
import { cartReducer } from './cart';
export default combineReducers({
    Allproducts : productReducer,
    cart: cartReducer
})
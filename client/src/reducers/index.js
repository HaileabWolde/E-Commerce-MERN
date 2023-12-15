import {combineReducers} from 'redux';
import { productReducer } from './productListing'

export default combineReducers({
    Allproducts : productReducer
})
import { createStore, applyMiddleware} from 'redux'
import { thunk } from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from '../reducers';

const cartItemsFromStorage = localStorage.getItem('cartItems') ?
JSON.parse( localStorage.getItem('cartItems')) : []

const userItemsFromStorage = localStorage.getItem('userInfo') ? 
JSON.parse(localStorage.getItem('userInfo')) : {}

const shippingAddressInfo = localStorage.getItem('ShippingInfo') ? 
JSON.parse(localStorage.getItem('ShippingInfo')) : {}

const paymentInfoUrl = localStorage.getItem('PaymentInfo') ? 
JSON.parse(localStorage.getItem('PaymentInfo')) : {}

const orderInfoUrl = localStorage.getItem('OrderItems') ? 
JSON.parse(localStorage.getItem('OrderItems')) : {}
const initialState = {
    cart:{
        cartItems: cartItemsFromStorage,
        ShippingInfo: shippingAddressInfo,
        paymentInfo: paymentInfoUrl  
    },
    user:{
        userInfo: userItemsFromStorage.rest,
        token: userItemsFromStorage.token
    },
    order: {
        orderObject: orderInfoUrl
    }
}
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store
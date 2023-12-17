import { createStore, applyMiddleware} from 'redux'
import { thunk } from 'redux-thunk';
import {composeWithDevTools} from 'redux-devtools-extension'
import reducers from '../reducers';
const cartItemsFromStorage = localStorage.getItem('cartItems') ?
JSON.parse( localStorage.getItem('cartItems')) : []
const initialState = {
    cart:{
        cartItems: cartItemsFromStorage
    }
}
const store = createStore(reducers, initialState, composeWithDevTools(applyMiddleware(thunk)));

export default store
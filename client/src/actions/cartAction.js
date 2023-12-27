import axios from "axios";
import { ADD_CART_PROUDCT, START_CART_LOADING, END_CART_LOADING, 
    DELETE_CART_PRODUCT, ShippingAddressInfo,  payment} from "../constants/cartConstant";

export const AddCartItem = (qty, id)=>async(dispatch, getState)=>{
    try{
        dispatch({type: START_CART_LOADING})
        const {data} = await axios.get(`https://e-commerce-mern-weld.onrender.com/product/getsingleproduct/${id}`)
        
        dispatch({
            type: ADD_CART_PROUDCT,
            payload: { ...data, qty}
        })
        dispatch({type: END_CART_LOADING})
        localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
    }
    catch(error){
        console.log(error)
    }

}

export const shippingAddressInfo = (data, navigate)=>async(dispatch)=>{
    dispatch({  type: ShippingAddressInfo, 
                payload: data
            })
            localStorage.setItem("ShippingInfo", JSON.stringify(data));
            if(navigate){
                navigate('/payment')
            }
}

export const paymentInfo = (data, navigate)=>async(dispatch)=>{
    dispatch({
        type: payment,
        payload: data
    })
    localStorage.setItem('PaymentInfo', JSON.stringify(data))
    if(navigate){
        navigate('/placeorder')
    }
}

export const DeleteCartItem = (id)=>async(dispatch, getState)=>{
    try{
        const {data} = await axios.get(`https://e-commerce-mern-weld.onrender.com/product/getsingleproduct/${id}`)

        dispatch({
            type: DELETE_CART_PRODUCT,
            payload: data
        })
        localStorage.setItem("cartItems", JSON.stringify(getState().cart.cartItems));
    }
    catch(error){
        console.log(error)
    }
}
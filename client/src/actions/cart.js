import axios from "axios";
import { ADD_CART_PROUDCT, START_CART_LOADING, END_CART_LOADING } from "../constants/cartConstant";

export const AddCartItem = (qty, id)=>async(dispatch)=>{
    try{
        dispatch({type: START_CART_LOADING})
        const {data} = await axios.get(`http://localhost:5000/product/getsingleproduct${id}`)
        dispatch({
            type: ADD_CART_PROUDCT,
            payload: { ...data, qty}
        })
        dispatch({type: END_CART_LOADING})
    }
    catch(error){
        console.log(error)
    }

}
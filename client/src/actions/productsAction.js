import axios from "axios"
import { FETCH_ALL, FETCH_PRODUCT, START_LOADING, END_LOADING } from "../constants/productConstant"
export const Allproducts = ()=>async(dispatch)=>{
    try{
        dispatch({type: START_LOADING})
        const {data} = await axios.get("https://e-commerce-mern-weld.onrender.com/product/getproduct")
        dispatch({type: FETCH_ALL, payload: data})
        dispatch({type: END_LOADING})
    }
    catch(error){
        console.log(error)
    }
}
export const Singleproduct = (id)=>async(dispatch)=>{
    try{
        dispatch({type: START_LOADING})
        const {data} = await axios.get(`https://e-commerce-mern-weld.onrender.com/product/getsingleproduct/${id}`)
        dispatch({type: FETCH_PRODUCT, payload: data})
        dispatch({type: END_LOADING})
    }
    catch(error){
        console.log(error)
    }
}
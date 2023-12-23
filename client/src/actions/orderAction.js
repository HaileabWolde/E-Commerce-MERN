import axios from 'axios'
import { AddOrder } from '../constants/orderConstant'
export const createOrder = (Orderdata, navigate)=>async (dispatch, getState)=>{
    const {token} = getState().user
    const config = {
        headers: { 'Content-Type': 'application/json' ,
  Authorization : `Bearer ${token}` } 
    }
    const {data} = await axios.post('http://localhost:5000/order/createOrder', Orderdata, config)
    dispatch({
        type: AddOrder,
        payload: data
    })
    if(navigate){
        navigate(`/order/${data._id}`)
    }
    localStorage.setItem("OrderItems", JSON.stringify(getState().order.orderObject));
}

export const getOrder = (Id)=>async(dispatch, getState) =>{
    const config = {
        headers: { 'Content-Type': 'application/json' } 
    }
    const {data} = await axios.get(`http://localhost:5000/order/SingleOrder/${Id}`, config)
    console.log(data)
    dispatch({
        type:AddOrder,
        payload: data
    })
    localStorage.setItem("OrderItems", JSON.stringify(getState().order.orderObject));
}
import axios from 'axios'
import { AddOrder } from '../constants/orderConstant'
export const createOrder = (Orderdata)=>async (dispatch, getState)=>{
    const {token} = getState().user
    const config = {
        headers: { 'Content-Type': 'application/json' ,
  Authorization : `Bearer ${token}` } 
    }
    const {data} = await axios.post('http://localhost:5000/order/createOrder', Orderdata, config)
    console.log(data)
    dispatch({
        type: AddOrder,
        payload: data
    })
    localStorage.setItem("OrderItems", JSON.stringify(getState().order.orderObject));
}
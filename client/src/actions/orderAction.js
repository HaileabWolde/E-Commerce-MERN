import axios from 'axios'
import { AddOrder, ORDER_PAY_REQUEST, ORDER_PAY_FAIL, ORDER_PAY_SUCCESS } from '../constants/orderConstant'
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

export const payOrder = (orderId, paymentResult) => async (dispatch, getState) => {
        const {token} = getState().user
        try {
          dispatch({
            type: ORDER_PAY_REQUEST,
          });
        
          const config = {
            headers: {
              "Content-Type": "application/json",
              Authorization: `Bearer ${token}`,
            },
          };
          const { data } = await axios.post(
            `http://localhost:5000/order/updatepaid/pay/${orderId}`,
            paymentResult,
            config
          );
          dispatch({ type: ORDER_PAY_SUCCESS, payload: data });
        } catch (error) {
          dispatch({
            type: ORDER_PAY_FAIL,
            payload:
              error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
          });
        }
}
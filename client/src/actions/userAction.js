import { LOGINEND, LOGINERROR, LOGINSTART, LOGINSUCCESS , LOGOUTSUCCESS, UPDATESUCCESS} from "../constants/userConstant";
import axios from 'axios'

export const Login = (userData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: LOGINSTART });
    let responsedata = {}; // Declare data with a default value

    if (userData.name || userData.confirmpassword) {
      const config = { headers: { 'Content-Type': 'application/json' } };
      // Update the data variable within the if block
      const { data } = await axios.post(
        "https://e-commerce-mern-weld.onrender.com/user/signup",
        userData,
        config
      )
      responsedata = data
    } else {
      const config = { headers: { 'Content-Type': 'application/json' } };
      // Update the data variable within the else block
      const { data } = await axios.post(
        "https://e-commerce-mern-weld.onrender.com/user/signin",
        userData,
        config
      )
      responsedata = data
    }

    if (responsedata.success === false) {
      dispatch({ type: LOGINERROR, payload: responsedata.message });
    } else {
      dispatch({ type: LOGINSUCCESS, payload: responsedata});
      dispatch({ type: LOGINEND });
      if (navigate) {
        navigate('/');
      }
    }
    localStorage.setItem('userInfo', JSON.stringify(responsedata));
  } catch (error) {
    if (error.response && error.response.data.message) {
      dispatch({
        type: LOGINERROR,
        payload: error.response.data.message,
      });
    } else {
      dispatch({
        type: LOGINERROR,
        payload: error.message,
      });
    }
  }
};
export const updateUser = (Info)=>async(dispatch, getState)=>{
  const {token} = getState().user
  const config = { headers: { 'Content-Type': 'application/json' ,
  Authorization : `Bearer ${token}` } };
  try{
    dispatch({ type: LOGINSTART })
    const {data} = await axios.patch("https://e-commerce-mern-weld.onrender.com/user/updateUser", Info, config)

    
    if (data.success === false) {
      dispatch({ type: LOGINERROR, payload: data.message });
    }
    else{
      const responsedata = {...data, success: true}
        dispatch({type: UPDATESUCCESS, payload: responsedata})
        dispatch({type: LOGINEND})
    }
    const storedUserInfo = JSON.parse(localStorage.getItem('userInfo'));
    const updatedUserInfo = {
      ...storedUserInfo,
      rest: data
    }
    localStorage.setItem(`userInfo`, JSON.stringify(updatedUserInfo));
  }
  catch(error){
    if (error.response && error.response.data.message) {
      dispatch({
        type: LOGINERROR,
        payload: error.response.data.message,
      });
    } else {
      dispatch({
        type: LOGINERROR,
        payload: error.message,
      });
    }
  }
  }

  export const LOGOUT = ()=>async(dispatch)=>{
    try{
        dispatch({type: LOGOUTSUCCESS})
        localStorage.removeItem("userInfo")
        localStorage.removeItem('cartItems')
        localStorage.removeItem('ShippingInfo')
        localStorage.removeItem('PaymentInfo')
        localStorage.removeItem('OrderItems')
    }
    catch(error){
        console.log(error)
    }
  }
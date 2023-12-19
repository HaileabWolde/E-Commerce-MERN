import { LOGINEND, LOGINERROR, LOGINSTART, LOGINSUCCESS , LOGOUTSUCCESS} from "../constants/userConstant";
import axios from 'axios'

export const Login = (userData, navigate) => async (dispatch) => {
  try {
    dispatch({ type: LOGINSTART });
    let responsedata = {}; // Declare data with a default value

    if (userData.name || userData.confirmpassword) {
      const config = { headers: { 'Content-Type': 'application/json' } };
      // Update the data variable within the if block
      const { data } = await axios.post(
        "http://localhost:5000/user/signup",
        userData,
        config
      )
      responsedata = data
    } else {
      const config = { headers: { 'Content-Type': 'application/json' } };
      // Update the data variable within the else block
      const { data } = await axios.post(
        "http://localhost:5000/user/signin",
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

  export const LOGOUT = ()=>async(dispatch)=>{
    try{
        dispatch({type: LOGOUTSUCCESS})
        localStorage.removeItem("userInfo");
    }
    catch(error){
        console.log(error)
    }
  }
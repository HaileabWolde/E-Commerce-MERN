import { LOGINEND, LOGINERROR, LOGINSTART, LOGINSUCCESS , LOGOUTSUCCESS} from "../constants/userConstant";
import axios from 'axios'

export const Login = (userData, navigate) => async (dispatch) => {
    try {
      dispatch({ type: LOGINSTART });
      const config = { headers: { 'Content-Type': 'application/json' } };
      const { data } = await axios.post(
        "http://localhost:5000/user/signin",
        userData,
        config
      );
    
      if (data.success === false) {
        dispatch({ type: LOGINERROR, payload: data.message });
      } else {
        dispatch({ type: LOGINSUCCESS, payload: data });
        dispatch({ type: LOGINEND })
        if(navigate){
            navigate('/')
        }
      
      }
      localStorage.setItem('userInfo', JSON.stringify(data));
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
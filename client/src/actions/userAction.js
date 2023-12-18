import { LOGINEND, LOGINERROR, LOGINSTART, LOGINSUCCESS, LOGOUT } from "../constants/userConstant";
import axios from 'axios'

export const Login = (userData)=>async(dispatch)=>{
    try{
        dispatch({type: LOGINSTART})
        const config = {headers: { 'Content-Type': 'application/json'}}
        const {data} = await axios.post("http://localhost:5000/user/signin", userData, config)
        if(data.success === false){
            dispatch({type: LOGINERROR, payload: data})
        }
        else{
            dispatch({type: LOGINSUCCESS, payload: data})
            dispatch({type: LOGINEND})
            localStorage.setItem('userInfo', JSON.stringify(data))
        }
    }
    catch(error){
        dispatch({
            type: LOGINERROR, payload: error.message
        })
    }
}
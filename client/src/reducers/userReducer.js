import {LOGINSTART, LOGINEND, LOGINSUCCESS, LOGINERROR, LOGOUT} from '../constants/userConstant'
export const userReducer = (state= {isloading:false, error:false, userInfo:{}}, action)=>{
    switch(action.type){
        case LOGINSTART:
            return {
                ...state,
                isloading: true
            }
        case LOGINEND:
            return {
                ...state,
                isloading: false
            }
        case LOGINSUCCESS:
            return {
                ...state,
                userInfo: action.payload.rest,
                token: action.payload.token
            }
        case LOGOUT:
            return {
                ...state,
                userInfo: {},
                token: null
            }
        case LOGINERROR:
            return {
                ...state,
                error: action.payload,
                isloading: false
            }
        default:
            return state
    }
}
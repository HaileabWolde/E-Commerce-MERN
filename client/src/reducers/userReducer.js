import {LOGINSTART, LOGINEND, LOGINSUCCESS, LOGINERROR,  LOGOUTSUCCESS, UPDATESUCCESS} from '../constants/userConstant'
export const userReducer = (state= {isloading:false, error:null, userInfo:{}}, action)=>{
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
                token: action.payload.token,
                error: false
            }
        case LOGOUTSUCCESS:
            return {
                ...state,
                userInfo: {},
                token: null,
                error: null,
                isloading: false
            }
        case  UPDATESUCCESS:
            return {
                ...state,
                userInfo: action.payload
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
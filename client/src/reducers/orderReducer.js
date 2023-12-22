import { AddOrder } from "../constants/orderConstant"
export const orderReducer = (state={ isloaading:false , orderObject:{}}, action)=>{
    switch(action.type){
        case AddOrder:
            return {
                ...state,
                orderObject: action.payload
            }
        default:
            return state
    }

}
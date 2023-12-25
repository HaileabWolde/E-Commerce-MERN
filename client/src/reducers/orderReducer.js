import { AddOrder, ORDER_PAY_FAIL, ORDER_PAY_REQUEST, ORDER_PAY_SUCCESS, 
  ORDER_PAY_RESET, FETCH_ALL_ORDER, FETCH_ORDER_ERROR } from "../constants/orderConstant"
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
export const orderPayReducer = (state = {}, action) => {
    switch (action.type) {
      case ORDER_PAY_REQUEST:
        return {
          loading: true,
        };
      case ORDER_PAY_SUCCESS:
        return {
          loading: false,
          success: true,
        };
      case ORDER_PAY_FAIL:
        return {
          loading: false,
          Err: action.payload,
        };
      case  FETCH_ALL_ORDER:
        return {
          ...state,
          AllOrders: action.payload,
          loading: false
        }
      case FETCH_ORDER_ERROR:
        return {
          ...state,
          Err: action.payload
        }
      case ORDER_PAY_RESET:
        return {};
      default:
        return state;
    }
  };
  
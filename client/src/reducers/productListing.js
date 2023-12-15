export const productReducer = (state={isloading: true, products:[]}, action)=>{
    switch(action.type){
        case 'START_LOADING':
            return {
                ...state,
                isloading: true
            }
        case 'END_LOADING':
            return {
                ...state,
                isloading: false
            }
        case 'FETCH_ALL':
            return {
                ...state,
                products: action.payload
            }
        case 'FETCH_PRODUCT':
            return {
                ...state,
                product: action.payload
            }
        default:
            return state;
    }
}
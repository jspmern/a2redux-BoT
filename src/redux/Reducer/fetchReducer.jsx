import { ERROR, FETCHED, LOADING } from "../action/actionConstant";

let intialState={
    error:'',
    data:[],
    loading:false
}

function fetchReducer(state=intialState,action) {
    switch (action.type) {
        case LOADING:
            return {...state,loading:true} 
            case FETCHED:
                return { ...state,loading:false,data:action.payload}
                case ERROR:
                    return {...state,loading:false,error:action.type}
           
    
        default:
             return state
    }
}

export default fetchReducer
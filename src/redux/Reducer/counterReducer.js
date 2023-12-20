import { DEC, INC } from "../action/actionConstant"

let initalState={
    inc:1,
    dec:10
}
function counterReducer(state=initalState,action)
{
     switch (action.type) {
        case INC:
            return {...state,inc:state.inc+1}
            case DEC:
                return {...state,dec:state.dec-1}
                default:
                    return state
     }
}
export default counterReducer
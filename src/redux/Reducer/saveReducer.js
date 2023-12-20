import { SAVE } from "../action/actionConstant";

let intialState={
    data:[]
}
function saveReducer(state=intialState,action)
{
    switch (action.type) {
        case SAVE:
            let newData=[...state.data,action.payload]
              return {...state,data:newData}
             default:
                  return state
    }
}
export default saveReducer
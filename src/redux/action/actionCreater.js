import { DEC, ERROR, FETCHED, INC, LOADING, SAVE } from "./actionConstant";

export function incHandler()
{
    return { type:INC}
}
export function decHandler()
{
    return {type:DEC}
}
export function saveHandler(data)
{
    return {type:SAVE,payload:data}
}
export function fetchData(url)
{
    return (dispatch)=>{
        dispatch({type:LOADING})
        fetch(url).then((item)=>{
            return item.json()
        }).then((data)=>{
            dispatch({type:FETCHED,payload:data})
        }).catch((err)=>{
            dispatch({type:ERROR,payload:err})
        })
    }
      

}
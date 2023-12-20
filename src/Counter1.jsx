import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { decHandler, incHandler } from './redux/action/actionCreater'

function Counter1() {
    //consuming
   let x= useSelector((item)=>{
          return item.counterReducer
    })
    
    //dispatch
    let dispatch=useDispatch()
  return (
     <>
       <p> inc:{x.inc}</p>
       <p> dec :{x.dec}</p>
       <button onClick={()=>{
        dispatch(incHandler())
       }}>inc</button>
       <button onClick={()=>{
        dispatch(decHandler())
       }}>dec</button>
     </>
  )
}

export default Counter1
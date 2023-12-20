import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { saveHandler } from './redux/action/actionCreater'

function Print2() {
   let [input,setInput]= useState('')
      let dispatch= useDispatch()
   function inputHandler(e)
   {
    setInput(e.target.value)
   }
  return (
    <div>
        <input type='text' placeholder='enter your msg for print'
        onChange={inputHandler} value={input}/>
        <button onClick={()=>{
               dispatch(saveHandler(input))
               setInput('')
        }}>ADD</button>
    </div>
  )
}

export default Print2
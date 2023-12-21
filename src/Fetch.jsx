import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchData } from './redux/action/actionCreater'

function Fetch() {
    let url="https://jsonplaceholder.typicode.com/users"
    let dispatch=useDispatch()
    useEffect(()=>{
        dispatch(fetchData(url))
    },[])

   let x= useSelector((item)=>{
        return item.fetchReducer
    })
    console.log('hello i am fetch',x)

  return (
    <div>Fetch</div>
  )
}

export default Fetch
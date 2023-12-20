import React from 'react'
import Print from './Print'
import { useState } from 'react'
import { useCallback } from 'react'
import Memo from './Memo'

function Counter() {
    console.log('hello i am counter')
    let [count, setCount] = useState(1)
    let [input, setInput] = useState('')
    let incHandler = useCallback(() => {
           setCount(count + 1)
    }, [count])
    function inputHandler(e) {
        setInput(e.target.value)
    }
    return (
        <div>Counter  {count}

            <br />
            <Print incHandler={incHandler} />
            <br/>
            <Memo/>
            {/* <input type='text' placeholder='enter your name' onChange={inputHandler} /> */}
            <br />

        </div>
    )
}

export default Counter
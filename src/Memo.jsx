import React from 'react'
import { useMemo } from 'react'
import { useState } from 'react'

function Memo() {
    let [couter, setCouter] = useState(1)
    let value = 1
    let genrateNumber = useMemo(() => {
        console.log('hello genrateNumber')
        for (let i = 0; i <= 50000000; i++) {
            value++
        }
        return value
    }, [])

    return (
        <div>
            <h1>value:{genrateNumber}</h1>


        </div>
    )
}

export default Memo

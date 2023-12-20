import React from 'react'

function Print({incHandler}) {
    console.log('hello i am print')
  return (
    <div>
         <button onClick={incHandler}>incHandler</button>
    </div>
  )
}

export default React.memo(Print) 





// import React from 'react'

// function Print() {
//     console.log('hello i am print')
//   return (
//     <div>Print</div>
//   )
// }

// export default  Memorize= React.memo(Print) 
import React from 'react'
import {reducer,UP,DOWN} from './reducer'
// const Counter = () => {

//     const [number,setNumber] = React.useState(0)

//     const onUp = () => {
//         setNumber((s)=>s+1)
//     }

//     const onDown = () => {
//         setNumber((s)=>s-1)
//     }

//     return (
//         <>
//             <div>
//                 <h2>{number}</h2>
//                 <button onClick={onUp}>+1</button>
//                 <button onClick={onDown}>-1</button>
//             </div>
//         </>
//     );
// }


const Counter = () => {
    const [number,dispatch] = React.useReducer(reducer,0)
    //  
    // const [number,setNumber] = React.useState(0)
    const onUp = () => { 
        dispatch({ type:UP })
    }
    const onDown = () => {
        dispatch({ type:DOWN })
        
     }

    return (
        <div>
            <h2>{number} fff</h2>
            <button onClick={onUp}>+1</button>
            <button onClick={onDown}>-1</button>
        </div>
    )
}

export default Counter
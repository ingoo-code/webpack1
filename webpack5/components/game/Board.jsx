import React from 'react'
import Square from './Square'

const Board = ({squares,onClick}) => {
    const square = squares.map( (v,k)=>{
        return (
            <Square 
                key={k}
                value={v}
                onClick={()=>onClick(k) }
            />
        )
    } )
    return (
        <>
            {square}
        </>
    )
}

export default Board
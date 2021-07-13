import React from 'react'
import Styled from 'styled-components'

const Button = Styled.button`
    width:33%;
    height:70px;
    border:1px solid #000;
    background:#fff;
    cursor:pointer;
    font-size:24px;
`

const Square = ({value,onClick}) => {
    return (
        <Button onClick={()=>onClick()}>
            {value}
        </Button>
    )
}

export default Square
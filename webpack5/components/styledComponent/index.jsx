import React from 'react'
import styled from 'styled-components'

const ButtonStyle = {
    "background":"black",
    "border":"none",
    "color":"#fff",
    "padding":"7px 14px"
}

const Button = styled.button`
    background:#000;
    border:none;
    color:#fff;
    padding:7px 14px;
`

const ButtonHover = styled(Button)`
    background:#007bff;
    :hover{
        background:#0069d9;
    }
`

const Index = () => {
    const inputRef = React.useRef() // []
    const handleClick = () => {
        inputRef.current.focus()
        
        if(inputRef.current.style.display === ''){
            inputRef.current.style.display = 'none'
        } else {
            inputRef.current.style.display = ''
        }
    }
    return (
        <>
            <div>
                <input type="text" ref={inputRef} />
                <button 
                    style={ButtonStyle}
                    onClick={handleClick}
                >
                    Hello?
                </button>
                <Button onClick={()=>{ handleClick() }}>
                    asdfasdf
                </Button>
                <ButtonHover onClick={()=>{ handleClick() }}>
                    호버버튼
                </ButtonHover>
            </div>
        </>
    )
}

export default Index
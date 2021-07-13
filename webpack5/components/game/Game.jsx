import React, { useEffect } from 'react'
import Board from './Board'
import Styled from 'styled-components'

const GameDiv = Styled.div`
    display:flex;
    flex-wrap:wrap;
    align-item:center;
    justify-content:center;
    width:300px;
`

const reducer = (state,action) => {
    // code block
    switch(action.type){
        case "NEXT":
            const {squares} = {...state}
            squares[action.index] = state.xIsNext ? 'O' : 'X'
            return {
                ...state,
                xIsNext:!state.xIsNext,
                squares
            }
        case "WIN":
            return {
                ...state,
                winner:action.winner
            }
    }
}

const defaultState = {
    squares:Array(9).fill(null),
    xIsNext:true,
    winner:null
}

const Winner = (squares) =>{
    let lines = [
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ]

    for(let i = 0; i<lines.length; i++){
        const [a,b,c] = lines[i]
        if(squares[a] == squares[b] && squares[a] == squares[c]){
            return squares[a]
        }
    }
    return null
}

const Game = () => {
    const [state,dispatch] = React.useReducer(reducer,defaultState)

    const handleClick = (n) => {
        if(state.squares[n]) return
        if(state.winner !== null) return
        dispatch({ type:'NEXT',index:n })
        // console.log(n)
    }

    React.useEffect(()=>{
        const win = Winner(state.squares)
        if(win !== null){
            dispatch({type:'WIN',winner:win})
        }
    },[state.xIsNext])

    return (
        <>
            <GameDiv>
                <Board
                    squares={state.squares}
                    onClick={handleClick}
                />
            </GameDiv>
            {state.winner ? `${state.winner}님 승리!` : `Next Player : ${state.xIsNext ? 'O' : 'X'}`}
        </>
    )
}

export default Game
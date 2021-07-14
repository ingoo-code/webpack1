import {createContext} from 'react'

const initalState = {
    commentItem:[
        {
            userid:'web7722',
            content:'안녕하세요',
            date:'2021-07-01'
        },
    ]
}
const Store = 
createContext(initalState);

export default Store
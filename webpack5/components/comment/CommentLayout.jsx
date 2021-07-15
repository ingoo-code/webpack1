import React,{useContext,useReducer,useEffect} from 'react'

import Store from './Store/context'
import reducer from './Store/reducer'
import {getComment} from './api/api'

const CommentLayout = ({children}) => {

    const globalStore = useContext(Store)
    console.log('context value : ',globalStore)

    const [state,dispatch] = useReducer(reducer,globalStore)
    console.log('state value : ',state)

    useEffect(async ()=>{
        //console.log('최소 실행 render')
        getComment(dispatch)
    },[])

    return (
        //Store = {state,dispatch}
        <Store.Provider value={{state,dispatch}}>
            <ul className="comment">
                {children}
            </ul>
        </Store.Provider>
    );
}

//ReactDOM
export default CommentLayout
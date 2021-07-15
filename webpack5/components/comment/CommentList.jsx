import React,{useContext} from 'react'
import CommentItem from './CommentItem'
import Store from './Store/context'

const CommentList = () => {
    // const list = [
    //     {userid:"web7722",content:"안녕하세요1",date:"2021-07-14"},
    //     {userid:"web7722",content:"안녕하세요2",date:"2021-07-14"},
    //     {userid:"web7722",content:"안녕하세요3",date:"2021-07-14"},
    //     {userid:"web7722",content:"안녕하세요4",date:"2021-07-14"},
    //     {userid:"web7722",content:"안녕하세요5",date:"2021-07-14"},
    //     {userid:"web7722",content:"안녕하세요6",date:"2021-07-14"},
    //     {userid:"web7722",content:"안녕하세요7",date:"2021-07-14"},
    // ]

    const {state} = useContext(Store) // {state,dispatch}
    const list = state.commentItem
    const {loadding,commentItem,error} = state

    const Item = list.map( (v,k)=>{
        return (
            <CommentItem 
                key={k}
                userid={v.userid}
                content={v.content}
                date={v.date}
                index={k}
            />
        )
    } )

    if(loadding) return <li>나 로딩중..</li>;
    if(error) return <li>나 에러나씀.</li>;
    return ( <li>{Item}</li> )
}

export default CommentList
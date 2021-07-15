

// reducer는 결국 상태를 바꿔야 하기떄문에 
// 이전 상태값을 가져와야함.
// dispatch 바꿀정보를 받아야함 -> action
// 결국 앤 리턴을해주는데 무엇을 리턴하냐 state값 
const reducer = (state,action) => {
    switch(action.type){
        case "GET_COMMENT": // 최초 실행하였을때.
            console.log('GET_COMMENT')
            return {
                ...state,
                loadding:true,
            }
        case "GET_COMMENT_SUCCESS": //데이터를 완전히 받아왔을때.
            console.log('GET_COMMENT_SUCCESS')
            return {
                ...state,
                loadding:false,
                commentItem:action.payload,
            }
        case "GET_COMMENT_ERROR": // 데이터를 읽어오지 못했을때.
            return {
                ...state,
                loadding:false,
                error:action.payload
            }
        case "CREATE":
            return {
                ...state,
                commentItem:[...state.commentItem,action.payload]
            }
        case "UPDATE":
            console.log('수정을할거니 ? : ',action)
            // let content = action.payload.content;
            // let index = action.payload.index;
            // let {content,index} = {...action.payload}
            // // let {payload:{content,index}} = action
            // let {commentItem} = {...state}
            // commentItem[index].content = content
            // return {
            //     ...state,
            //     commentItem:[...commentItem]
            // }

            let content = action.payload.content;
            let index = action.payload.index;
            let commentItem = state.commentItem // 복사해서 가져온다. point
            console.log(commentItem)
            console.log(commentItem[index]) // index값이 무엇을 의미하는지 
            console.log(commentItem[index].content) // 여기서쓰는 content
            console.log(content) // 여기서 쓰는 content
            commentItem[index].content = content
            console.log('test ',{...state,commentItem})
            return {
                ...state,
            }


            //return state
        case "DELETE":
            console.log('인덱스야 왔니? : ',action.payload);
            console.log(state.commentItem)
            let newArr = []
            for(let i=0; i<state.commentItem.length; i++){
                if(i !== action.payload) newArr.push(state.commentItem[i])
            }
            console.log(newArr,state.commentItem)
            // newArr = 내가 원하는값을 삭제하고 남은 배열값
            // state.commentITtem = 내가 기존에 가지고있었떤 배열값
            // (3) [{…}, {…}, {…}] (4) [{…}, {…}, {…}, {…}]
            return {
                ...state,
                commentItem:[newArr]
                // commentItem:[...state.commentItem.filter( (v,k)=> action.payload !==k ) ]
            }
        default:
            return state
    }
}

export default reducer 
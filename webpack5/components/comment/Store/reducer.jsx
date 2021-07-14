

// reducer는 결국 상태를 바꿔야 하기떄문에 
// 이전 상태값을 가져와야함.
// dispatch 바꿀정보를 받아야함 -> action
// 결국 앤 리턴을해주는데 무엇을 리턴하냐 state값 
const reducer = (state,action) => {
    switch(action.type){
        case "CREATE":
            return {
                ...state,
                commentItem:[...state.commentItem,action.payload]
            }
        case "UPDATE":
            return state
        case "DELETE":
            return state
        default:
            return state
    }
}

export default reducer 
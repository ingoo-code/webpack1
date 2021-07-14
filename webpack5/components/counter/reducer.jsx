export const UP = 'UP'
export const DOWN = 'DOWN'
export const reducer = (state,action) => {
    // code block
    switch(action.type){
        case "UP":
            return state+1
        case "DOWN":
            return state-1
        default:
            return state;
    }
}


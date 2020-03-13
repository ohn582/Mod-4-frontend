//this is our basic example of our reducer.
//reducer is what is going to manage our state for us 

export default(state= [], action) => {
    switch(action.type){ //that is a standard for our state
        case "SET_MARKETS":
            return [...action.payload]
        case "ADD_MARKET":
            return [...state, action.payload]
        case "REMOVE_MARKET":
            let newMarkets = state.filter(market => market.id !== action.payload)
            return [...newMarkets]
        default:
            return state
    }
}





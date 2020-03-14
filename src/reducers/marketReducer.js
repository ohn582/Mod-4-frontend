

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





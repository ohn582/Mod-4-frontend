export const addNewTodo = market => {
    return (dispatch) => {
        return fetch('http://localhost:3000/markets', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({market})
        })
        .then(resp => resp.json())
        .then(market => {
                // this.setState({ //it sets the state or changes it
                //     catName: data.cat_name //this tiggers a rerender of the screen
                // })
            dispatch({type: "ADD_MARKET", payload: market})
        })
    }
}

export const removeMarket = marketId => {
    return (dispatch) => {
        // debugger
        return fetch(`http://localhost:3000/markets/${marketId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        })
        .then(resp => resp.json())
        .then(market => {
            // debugger
            dispatch({ type: "REMOVE_MARKET", payload: market.id })
        })
    }
}

export const fetchMarkets = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/markets')
        .then(resp => resp.json())
        .then(markets => {
            dispatch({type: 'SET_MARKETS', payload: markets})
        })
    }
}








export const fetchReviews = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/reviews')
            .then(resp => resp.json())
            .then(reviews => {
                dispatch({ type: 'SET_REVIEWS', payload: reviews })
            })
    }
}
import React, { Component } from 'react'
import '../App.css';
import Market from '../components/Market'
// import Review from '../components/Review'

class List extends Component {
    render() {
        
        return (
            <div>
                <h1>Select:</h1>
                <Market />
                {/* <Review /> */}
            </div>
        )
    }
}



export default List;
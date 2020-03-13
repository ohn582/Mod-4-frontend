import React, { Component } from 'react'
import '../App.css';
import Market from '../container/Market'

class List extends Component {  
    render(){
        return (
            <div>
                <h1>Select:</h1>
                <Market />
            </div>
        )
    }   
}



export default List;
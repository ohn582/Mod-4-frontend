
import React, { Component } from 'react'
import '../App.css';
import { addNewReview } from '../actions/index'
import { connect } from 'react-redux'

class ReviewForm extends Component {
    // debugger
    constructor(props) {  
        super(props)
        // this.input = React.createRef();    
        this.state = {
            name: "",
            content: "",
            market_id:""
        }
    }

    handleOnSubmit = e => {
        // debugger
        e.preventDefault();
        this.props.addNewReview(this.state); //this is state
        this.setState({
            name: "",
            content: "",
            market_id:""
        })
    };

    handleChange = e => {
        e.preventDefault();
        // debugger
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    render() {
        // debugger
        return (    
            <form onSubmit={this.handleOnSubmit}>
                <label className="in">Name:</label>
                <br />
                <input type='text' name='name' value={this.state.name} onChange={this.handleChange} />
                <br />
                <label className="in">Review:</label>
                <br />
                <textarea type='text' name='content' value={this.state.content} onChange={this.handleChange} />
                <br />
                <label className="in"> Market #:</label>
                <br />
                <input type='number' name='market_id' value={this.state.market_id} onChange={this.handleChange} />
                <br />
                <button type='submit' value="Create a Review" className='create'>Create</button>
            </form>        
        )
    }
}


export default connect(null, { addNewReview })(ReviewForm);



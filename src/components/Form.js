
import React, { Component } from 'react'
import '../App.css';
import { addNewTodo } from '../actions/index'
import { connect } from 'react-redux'

class Form extends Component {
    // debugger
    constructor(props) {  
        super(props)
        // this.input = React.createRef();    
        this.state = {
            name: "",
            info: "",
            fruits: ""
        }
    }

    handleOnSubmit = e => {
        // debugger
        e.preventDefault();
        this.props.addNewTodo(this.state); //this is state
        this.setState({
            name: "",
            info: "",
            fruits: ""
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
        return (
            <form onSubmit={ this.handleOnSubmit }>
               <h1>Create a Market</h1>
                <label className="in">Name:</label>
                <br />
                <input type='text' name='name' value={this.state.name} onChange={this.handleChange} /> {/*we need to trigger onChange method*/}
               <br />
               <label className="in">Info:</label>
                <br />
                <textarea type='text' name='info' value={this.state.info} onChange={this.handleChange} />
               <br />
                <label className="in">Fruits:</label>
                <br />
                <textarea type='text' name='fruits' value={this.state.fruits} onChange={this.handleChange} />
                <br />
                <button type='submit' value="Create a Market" className='create'>Create</button>
           </form>
        )
    }
}


export default connect(null, { addNewTodo })(Form);


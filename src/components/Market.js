import React, { Component } from 'react'
import '../App.css';
import MarketItem from '../components/MarketItem'
import Form from '../components/Form'
import { connect } from 'react-redux'
import { fetchMarkets } from '../actions/index'


// import { addNewTodo } from '../actions/index'

class Market extends Component {

    componentDidMount() {  
        this.props.fetchMarkets()
    }

                        //constructor is going to create a state in our application. It's only going to fire once
    constructor(props) { //constructor is going to fire before anything else happens in our application so our constructor fires only once and our constructor is going to basically create state in our application and it's going to create a state for our list once and only once and it's the first thing that happens when our component mounts. Our component is going to mount and it's going to create our data and even if you re-render the screen, it's not going to mount our constructor again. if you refresh the screen it will mount again. the initial state that you set is only going to fire once.
        super(props);   //"super" is going to bind this to our constructor,so with that we're not going to have our appropriate access to this.   //If we delete "super(props)" we wont be able to use like "this.state"
        this.state = {  
            market: []
        };
    }


    render() {
        // console.log(this.props.markets)
        const markets = this.props.markets.map((market, i) => <MarketItem key={i} market={market} />) //you can keep the same attributes
        //since we are using map above, we have to create a key beow because in react it dosent like map without a key

        // debugger
        return (
            <div>
                <div className="wrapper">{markets}</div>
                <Form handleOnSubmit={this.addNewTodo} />
            </div>
        )
    }
}

const mapStateToProps = state => {
    // debugger
    return {
        markets: state.markets
    }
}

export default connect(mapStateToProps, { fetchMarkets })(Market)



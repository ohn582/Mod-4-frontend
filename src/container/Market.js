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

                        
//     constructor(props) { 
//         super(props);   
//         this.state = {  
//             market: []
//         };
//     }

    render() {
        // console.log(this.props.markets)
        const markets = this.props.markets.map((market, i) => <MarketItem key={i} market={market} />) 

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



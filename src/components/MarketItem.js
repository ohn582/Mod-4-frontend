import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { removeMarket } from '../actions/index'
import Review from '../container/Review'




//functional component is simple and it only has a return. it dosent have a state
//functional components: deal that the fact the button exist & deal with user interacting the button


const MarketItem = ({ market, removeMarket }) => {
    // debugger
    return (
        <Router>
            <>
                <div className='box'>
                    <h4>{market.name}</h4>
                    <Route path={`/markets/${market.id}`}>
                           {market.info}
                        <br />
                        <Link to={`/markets`}><button className='close'>Close</button></Link>
                    </Route>

                    <Route path={`/fruits/${market.id}`}>
                        <li className='fruit-header'>{market.fruits}</li>
                        <br />
                        <Link to={`/markets`}><button className='close'>Close</button></Link>
                    </Route>

                    <br />
                    <Link to={`/markets/${market.id}`}><button className='info'>info</button></Link>
                    <Link to={`/fruits/${market.id}`}><button className='fruits'>fruits</button></Link>


                    <Route path={`/reviews/${market.id}`} component={Review} />
                    <Link to={`/reviews/${market.id}`}><button className='review'>Review</button></Link>
                    <button onClick={() => removeMarket(market.id)} className='clear'>Delete</button>
                </div>
            </>
        </Router>
    )
}

export default connect(null, { removeMarket })(MarketItem)
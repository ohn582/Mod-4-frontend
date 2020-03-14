import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { removeMarket } from '../actions/index'
import Review from '../container/Review'




const MarketItem = ({ market, removeMarket }) => {
    // debugger
    return (
        <Router>
            <>
                <div className='box'>
                    <h4>{market.id}: {market.name}</h4>
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
                    <Link to={`/markets`}><button className='er'>Exit Review</button></Link>
                </div>
            </>
        </Router>
    )
}

export default connect(null, { removeMarket })(MarketItem)

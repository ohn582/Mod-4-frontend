import React from 'react'
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import { connect } from 'react-redux'
import { removeReview } from '../actions/index'

const ReviewItem = ({ review, removeReview }) => {
    // debugger
    return (
        <Router>
            <>
                <Route path={`/reviews/${review.id}`}>
                    <div className='box'>      
                        <h4>{review.name}</h4>
                        <p>{review.content}</p>
                        <button onClick={() => removeReview(review.id)} className='clear'>Delete</button>   
                    </div> 
                    <Link to={`/markets`}><button className='close'>Close</button></Link>
                </Route>
            </>
        </Router>
    )
}

export default connect(null, { removeReview })(ReviewItem)
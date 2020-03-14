import React, { Component } from 'react';
import '../App.css';
import ReviewItem from '../components/ReviewItem'
import ReviewForm from '../components/ReviewForm'
import { connect } from 'react-redux'
import { fetchReviews } from '../actions/index'

class Review extends Component {

    componentDidMount() { // this is where all of our fetch happens
        this.props.fetchReviews()
    }

    constructor(props){
        super(props);
        this.state = {
            review: []
        }
    }


    render(){
        // console.log(this.props.review)
        const reviews = this.props.reviews.map((review, i) => <ReviewItem key={i} review={review} />) //you can keep the same attributes
        return(
            <div>
                <div className="wrapper">{reviews}</div>
                <ReviewForm handleOnSubmit={this.addNewReview} />
            </div>
        )
    }

}

const mapStateToProps = state => {
    // debugger
    return {
        reviews: state.reviews
    }
}

export default connect(mapStateToProps, { fetchReviews })(Review);


//mapStateToProps() method is executed with each change to the store's state.

//In this lesson we saw that the connect() function is used for us to connect our Redux part of the application to the React part of the application (we'll see even more of this later). We also see that whatever function we pass as the first argument to that connect() function is called each time there is a change of state, and has access to the entire store's state. The connect() function then takes the return value from the mapStateToProps() function and adds that return value to the props of the component that is passed through in the last parentheses. We call that component a connected component, because that component is connected to the store.
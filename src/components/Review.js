import React, { Component } from 'react';
import { connect } from 'react-redux'
import { fetchReviews } from '../actions/index'
// import ReviewItem from '../components/ReviewItem'

class Review extends Component {

    componentDidMount() { // this is where all of our fetch happens
        this.props.fetchReviews()
    }

    constructor(props){
        super(props)
        this.state = {
            review: []
        }
    }


    render(){
        // console.log(this.props.review)
        const reviews = this.props.review.map((name, i) => <ReviewItem key={i} review={name} />) //you can keep the same attributes
        return(
            <div></div>
        )
    }

}

const mapStateToProps = state => {
    // debugger
    return {
        review: state.reviews
    }
}

export default connect(mapStateToProps, { fetchReviews })(Review);
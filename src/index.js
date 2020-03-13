import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux' 
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import combineReducers from './reducers/index'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

let store = createStore(combineReducers, composeEnhancers(applyMiddleware(thunk)))

// we need the provider to wrap arround the App because it's going to give our entire application acess to our redux store. And our provider will actually take a prop called store.
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();




// We learned of two new pieces of React Redux middleware: connect() and Provider.The two pieces work hand in hand.Provider ensures that our entire React application can potentially access data from the store.Then connect(), allows us to specify which data we are listening to(through mapStateToProps), and which component we are providing the data.So when you see lines like this:

// That is saying connect the data in mapStateToProps()(the items portion of the state) to the App component.And the App component can access that state with this.props.items.Don't fret if you still feel hazy on connect() and mapStateToProps(). This is a new middleware api that takes time to learn. We won't introduce any new material in the next code along, we'll just try to deepen our understanding of the material covered in this section. First, please take at least a 15 minute break before moving on.


//Thunk allows us to return a function inside of our action creator. Normally, our action creator returns a plain JavaScript object, so returning a function is a pretty big change. Second, that function inside of Thunk receives the store's dispatch function as its argument. With that, we can dispatch multiple actions from inside that returned function.
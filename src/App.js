//JSX: it supports our cross combatibility. (Extention to the JavaScript language syntax)it is a compiler and it will take our ES6 asset that we write our code in and we dont have to worry about cross combatibility with things like internet explore 11 and other things
//It lets us write code that looks nearly identical to HTML, but allows us to mix in vanilla JavaScript and other neat things.
//  -it writes an XML(like code for elements ans components)
//  -JSX tags have a tag name, attributes, and children
//  -JSX is not necessity to write react applications.
//  -JSX makes your react code simpiler
//  -JSX ultimately transpiles to pure JavaScript which is understood by the browsers

//JSX diffrences
//-Class -> className
//-for -> htmlFor
//-camelCase property naming convention
//  -onclick -> onClick
//  -tabindex -> tabIndex

//Reading through the JSX code, we've got one div that contains three child elements, <header>, <p> and <ExampleComponent />. In your browser, these are the elements being displayed! The <header> provides a timestamp of the exact time the app was loaded. The <p> section includes the brief text on JSX.



//routing: It taks us to a diffrent URL. it is a new rout to get a new data
//dynamic routing: is relative to where you are in your application and this takes place as your app is rendering

//components are are a little pecies of reuseable codes that we can reuse over and over again such as function & class, own files,etc
//component that is taking an action
//their are two diffrent components that we can have in our application: fuction & class 

//routing: It taks us to a diffrent URL. it is a new rout to get a new data
//dynamic routing: is relative to where you are in your application and this takes place as your app is rendering

//components are are a little pecies of reuseable codes that we can reuse over and over again such as function & class, own files,etc
//component that is taking an action
//their are two diffrent components that we can have in our application: fuction & class 


//service side routing is what we use in ruby on rails


import React, { Component } from 'react' 
import './App.css';
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
import Home from './components/Home'  


class App extends Component { // name your components with an uppercase letter in react or else it will not reconize them
  render() {
    return (
      <Router>
        <div> 
            <h1>Welcome to Fruity Market App</h1>
            <Route path="/home" component={Home} />
            <Link to="/home" className='home'>Home</Link>
        </div>
      </Router>
    )
  }
}

export default App;



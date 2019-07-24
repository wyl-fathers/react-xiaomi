import React, { Component } from 'react';
// import logo from './logo.svg';
// import axios from 'axios'
// import Home from "./Views/Home"
// import User from './Views/User/'
// import Cart from './Views/Cart'
// import Category from './Views/Category'
import Navbar from './Components/Navbar'
import Go2Top from './Components/Go2Top'
// import store from './Redux'
import './App.css';

class App extends Component {
  state = {
    // current: store.getState().current
  }
  render() {
    return (
      <div>
        <Navbar></Navbar>
        <Go2Top></Go2Top>
        {
          this.props.children
        }
      </div>
    );
  }

  // componentWillMount() {
  //   store.subscribe(() => {
  //     this.setState({
  //       current: store.getState().current
  //     }, () => {
  //       console.log(store.getState().current)
  //     })
  //   })
  // }




}

export default App;


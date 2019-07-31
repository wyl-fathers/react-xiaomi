import React, { Component } from 'react';
// import logo from './logo.svg';
// import axios from 'axios'
// import Home from "./Views/Home"
// import User from './Views/User/'
// import Cart from './Views/Cart'
// import Category from './Views/Category'
import Navbar from './Components/Navbar'
import Go2Top from './Components/Go2Top'
import store from './Redux'
import './App.css';

class App extends Component {
  state = {
    show: store.getState().isNavbaShow
  }
  render() {
    return (
      <div>
        {this.state.show ?
          <Navbar></Navbar>
          : null
        }
        <Go2Top></Go2Top>
        {
          this.props.children
        }
      </div>
    );
  }

  componentWillMount() {
    store.subscribe(() => {
      this.setState({
        show: store.getState().isNavbaShow
      })
    })
  }




}

export default App;


import React, { Component } from 'react';
// import logo from './logo.svg';
// import axios from 'axios'
import Home from "./Views/Home"
import User from './Views/User/'
import Cart from './Views/Cart'
import Category from './Views/Category'
import Navbar from './Components/Navbar'
import './App.css';

class App extends Component {
    state = {
        current: 0
    }
    render() {
        return (
            <div>
                <Navbar current={(data) => {
                    this.setState({
                        current: data
                    })
                }} tocurrent={0}>
                </Navbar>
                {
                    this.switchComponent()
                }

            </div>
        );
    }

    switchComponent() {
        switch (this.state.current) {
            case 0:
                return <Home />
            case 1:
                return <Category />
            case 2:
                return <Cart />
            case 3:
                return <User />

        }

    }

}

export default App;


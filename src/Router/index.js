import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../App'
import Home from '../Views/Home'
import Cart from '../Views/Cart'
import Category from '../Views/Category'
import User from '../Views/User'
const router = <Router>
    <App>
        <Switch>
            <Route path='/home' component={Home} exact></Route>
            <Route path='/category' component={Category} exact></Route>
            <Route path='/cart' component={Cart} exact></Route>
            <Route path='/user' component={User} exact></Route>
        </Switch>
    </App>
</Router>

export default router
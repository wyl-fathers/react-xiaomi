import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../App'
import Home from '../Views/Home'
import Cart from '../Views/Cart'
import Category from '../Views/Category'
import User from '../Views/User'
import Detail from '../Views/Detail'
const router = <Router>
    <App>
        <Switch>
            <Route path='/home' component={Home} exact></Route>
            <Route path='/category' component={Category} exact></Route>
            <Route path='/cart' component={Cart} exact></Route>
            <Route path='/user' component={User} exact></Route>
            <Route path='/detail:id' component={Detail} exact></Route>
        </Switch>
    </App>
</Router>

export default router
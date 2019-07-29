import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from '../App'
import Home from '../Views/Home'
import Cart from '../Views/Cart'
import Category from '../Views/Category'
import User from '../Views/User'
import SS from '../Views/SS'
import SearchPage from '../Views/SearchPage'
const router = <Router>
    <App>
        <Switch>

            <Route path='/home' component={Home} exact></Route>
            <Route path='/search=:searchname' component={SearchPage} exact></Route>
            <Route path='/category' component={Category} exact></Route>
            <Route path='/cart' component={Cart} exact></Route>
            <Route path='/user' component={User} exact></Route>
            <Route path='/ss' component={SS} exact></Route>
            <Redirect from="/" to="/home" />
        </Switch>
    </App>
</Router>

export default router
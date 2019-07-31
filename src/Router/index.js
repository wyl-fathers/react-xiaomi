import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import App from '../App'
import Home from '../Views/Home'
import Cart from '../Views/Cart'
import Category from '../Views/Category'
import User from '../Views/User'
import Detail from '../Views/Detail'

import SS from '../Views/SS'
import SearchPage from '../Views/SearchPage'

import Login from '../Views/User/Login'
import Maplocation from '../Views/User/Maplocation'
import Mpointsmall from '../Views/User/Mpointsmall'
import Pass from '../Views/User/Pass'
import Services from '../Views/User/Services'

const router = <Router>
    <App>
        <Switch>

            <Route path='/home' component={Home} exact></Route>
            <Route path='/search=:searchname' component={SearchPage} exact></Route>
            <Route path='/category' component={Category} exact></Route>
            <Route path='/cart' component={Cart} exact></Route>
            <Route path='/user' component={User} exact></Route>
            <Route path='/detail:id' component={Detail} exact></Route>
            <Route path='/ss' component={SS} exact></Route>
            <Route path='/login' component={Login} exact></Route>
            <Route path='/maplocation' component={Maplocation} exact></Route>
            <Route path='/mpointsmall' component={Mpointsmall} exact></Route>
            <Route path='/pass' component={Pass} exact></Route>
            <Route path='/services' component={Services} exact></Route>
            <Redirect from="/" to="/home" />

        </Switch>
    </App>
</Router>

export default router
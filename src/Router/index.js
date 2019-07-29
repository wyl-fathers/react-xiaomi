import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom'
import App from '../App'
import Home from '../Views/Home'
import Cart from '../Views/Cart'
import Category from '../Views/Category'
import User from '../Views/User'
import Login from '../Views/User/Login'
import Maplocation from '../Views/User/Maplocation'
import Mpointsmall from '../Views/User/Mpointsmall'
import Pass from '../Views/User/Pass'
import Services from '../Views/User/Services'

const router = <Router>
    <App>
        <Switch>
            <Route path='/home' component={Home} exact></Route>
            <Route path='/category' component={Category} exact></Route>
            <Route path='/cart' component={Cart} exact></Route>
            <Route path='/user' component={User} exact></Route>
            <Route path='/Login' component={Login} exact></Route>
            <Route path='/Maplocation' component={Maplocation} exact></Route>
            <Route path='/Mpointsmall' component={Mpointsmall} exact></Route>
            <Route path='/Pass' component={Pass} exact></Route>
            <Route path='/Services' component={Services} exact></Route>
        </Switch>
    </App>
</Router>

export default router
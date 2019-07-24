import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import css from './index.module.scss'
class Navbar extends Component {
    render() {
        return (
            <div className={css.Navbar}>
                <ul>
                    <li ><NavLink to="/home" replace activeClassName={css.active}><span className='iconfont'>&#xe69f;</span> 首页</NavLink></li>
                    <li  ><NavLink to="/category" replace activeClassName={css.active}><span className='iconfont'>&#xe69e;</span> 分类</NavLink></li>
                    <li ><NavLink to="/cart" replace activeClassName={css.active}><span className='iconfont'>&#xe609;</span> 购物车</NavLink></li>
                    <li ><NavLink to="/user" replace activeClassName={css.active}><span className='iconfont'>&#xe677;</span> 我的</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Navbar

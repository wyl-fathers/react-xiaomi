import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'
import css from './index.module.scss'
class Navbar extends Component {
    render() {
        return (
            <div className={css.Navbar}>
                <ul>
                    <li ><NavLink to="/home" activeClassName={css.active1}><span className='iconfont'>&#xe69f;</span> 首页</NavLink></li>
                    <li  ><NavLink to="/category" activeClassName={css.active1}><span className='iconfont'>&#xe69e;</span> 分类</NavLink></li>
                    <li ><NavLink to="/cart" activeClassName={css.active1}><span className='iconfont'>&#xe609;</span> 购物车</NavLink></li>
                    <li ><NavLink to="/user" activeClassName={css.active1}><span className='iconfont'>&#xe677;</span> 我的</NavLink></li>
                </ul>
            </div>
        )
    }
}

export default Navbar

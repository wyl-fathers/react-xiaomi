import React, { Component } from 'react'
import css from './index.module.scss'

class List extends Component {
    render() {
        return (
            <div className={css.List}>
                <nav>全部</nav>
                <div>
                    <ul>
                        <li>推荐</li>
                        <li>手机</li>
                        <li>智能</li>
                        <li>电视</li>
                        <li>笔记本</li>
                        <li>家电</li>
                        <li>生活周边</li>
                    </ul>
                </div>
            </div>
        )
    }
}

export default List

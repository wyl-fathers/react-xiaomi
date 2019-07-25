import React, { Component } from 'react'
import Search from '../Search'
import GoBack from '../GoBack'
import css from './index.module.scss'
class ListHead extends Component {
    render() {
        return (
            <div className={css.ListHead}>
                <div className={css.box}>
                    <div className={css.one}>
                        <GoBack></GoBack>
                    </div>
                    <div className={css.two}>{this.props.children}</div>
                    <div className={css.three}>
                        <Search></Search>
                    </div>
                </div>
            </div>
        )
    }
}


export default ListHead

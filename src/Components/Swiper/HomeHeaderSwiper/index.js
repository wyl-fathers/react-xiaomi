import React, { Component } from 'react'
import css from './index.module.scss'
import store from '../../../Redux'
class HomeHeadSwiper extends Component {
    render() {
        return (
            <div className={css.swiper}>
                <ul>
                    {
                        this.props.headList.length ? this.props.headList.map((item, index) => {
                            return <li key={item.page_id + 'page'} onClick={this.changeComp.bind(this, index)}>{item.name}</li>
                        }) : null
                    }
                </ul>
            </div>
        )
    }
    changeComp(data) {
        // console.log(data)
        store.dispatch({
            type: 'changecurrent',
            payload: data
        })
    }

}

export default HomeHeadSwiper

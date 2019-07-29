import React, { Component } from 'react'
import css from './index.module.scss'
import store from '../../../Redux'
class HomeHeadSwiper extends Component {
    state = {
        current: store.getState().current
    }
    render() {
        return (
            <div className={css.swiper}>
                <ul>
                    {
                        this.props.headList.length ? this.props.headList.map((item, index) => {
                            return <li key={item.page_id + 'page'} onClick={this.changeComp.bind(this, index)} className={
                                this.state.current === index ? 'cur' : ''
                            }>{item.name}</li>
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

    componentWillMount() {
        store.subscribe(() => {
            this.setState({
                current: store.getState().current
            })
        })
    }

}

export default HomeHeadSwiper

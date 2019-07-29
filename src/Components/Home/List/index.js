import React, { Component } from 'react'
import css from './index.module.scss'
import store from '../../../Redux'
class List extends Component {
    state = {
        dataList: ['推荐', '手机', '智能', '电视', '笔记本', '家电', '生活周边'],
        current: store.getState().current
    }
    render() {
        return (
            <div className={css.List}>
                <nav>全部</nav>
                <div>
                    <ul>
                        {
                            this.state.dataList.map((el, index) => {
                                return <li key={index + 'datalist_1'} onClick={this.showWhich.bind(this, index)} className={this.state.current === index ? 'cur1' : ''}>{el}</li>
                            })
                        }
                    </ul>
                </div>
            </div>
        )
    }


    showWhich(data) {
        store.dispatch({

            type: 'changecurrent',
            payload: data

        })
        this.props.hide(false)
    }


    componentWillMount() {
        store.subscribe(() => {
            this.setState({
                current: store.getState().current
            }, () => {
                console.log(store.getState().current)
            })
        })
    }
}
export default List

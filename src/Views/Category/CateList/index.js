import React, { Component } from 'react'
import css from './index.module.scss'
class CateList extends Component {
    state = {
        CateList: null,
        cur: 0
    }
    render() {
        return (
            <div className={css.CateList}>
                {

                    this.state.CateList ? <ul>
                        {
                            this.state.CateList.map((item, index) => {
                                return <li className={
                                    this.state.cur === index ? 'lzc_cur' : ''
                                } key={'List' + index} onClick={() => {
                                    this.setState({
                                        cur: index
                                    })
                                    this.props.myevent(this.refs[item])
                                }} ref={item}>
                                    {item}
                                </li>
                            })
                        }
                    </ul> : null
                }
            </div>
        )
    }

    componentWillMount() {
        this.setState({
            CateList: this.props.list
        })
    }

}


export default CateList

import React, { Component } from 'react'
import css from './index.module.scss'
class Navbar extends Component {
    state = {
        current: this.props.tocurrent
    }
    static defaultProps = {
        tocurrent: 0
    }
    componentWillMount() {
        // this.setState({
        //     current: this.props.tocurrent
        // })
        this.props.current(this.state.current)

    }
    render() {
        return (
            <div className={css.Navbar}>
                <ul>
                    <li onClick={() => {
                        this.setState({
                            current: 0
                        }, () => {
                            this.props.current(this.state.current)

                        })
                    }}><span className='iconfont'>&#xe69f;</span> 首页</li>
                    <li onClick={() => {
                        this.setState({
                            current: 1
                        }, () => {
                            this.props.current(this.state.current)
                        })
                    }} ><span className='iconfont'>&#xe69e;</span> 分类</li>
                    <li onClick={() => {
                        this.setState({
                            current: 2
                        }, () => {
                            this.props.current(this.state.current)
                        })
                    }}><span className='iconfont'>&#xe609;</span> 购物车</li>
                    <li onClick={() => {
                        this.setState({
                            current: 3
                        }, () => {
                            this.props.current(this.state.current)
                        })
                    }}><span className='iconfont'>&#xe677;</span> 我的</li>
                </ul>
            </div>
        )
    }
}

export default Navbar

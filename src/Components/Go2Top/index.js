import React, { Component } from 'react'
import css from './index.module.scss'
class GoTop extends Component {
    state = {
        isShow: false,
    }
    render() {
        return (
            <div className={css.aaa}>
                {
                    this.state.isShow ? <div onClick={() => {
                        this.getTop()
                    }}>
                        <span className='iconfont'>&#xe660;</span>
                    </div> : null
                }
            </div >
        )
    }

    getTop = () => {
        let timer = setInterval(() => {
            let top = document.documentElement.scrollTop
            let speed = Math.ceil(top / 5)
            document.documentElement.scrollTop = top - speed
            if (top === 0) {
                clearInterval(timer)
            }
        }, 20)
    }

    showscroll = () => {
        let scrolltop = document.documentElement.scrollTop
        if (scrolltop > 400) {
            this.setState({
                isShow: true
            })
        } else {
            this.setState({
                isShow: false
            })
        }
    }

    componentWillMount() {
        window.addEventListener('scroll', this.showscroll, true)
    }

}


export default GoTop
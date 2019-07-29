import React, { Component } from 'react'
import css from './index.module.scss'
import HomeHeaderSwiper from '../../../Components/Swiper/HomeHeaderSwiper'
import ShowList from '../../../Components/Home/ShowList'
import List from '../../../Components/Home/List'
class HomeHeader extends Component {
    state = {
        isShow: false,
        unmount: true
    }
    render() {
        return (
            <div className={css.box + ' ' + this.props.isFixed}>
                <div className={css.top}>
                    <div>
                        <span className="iconfont">&#xe661;</span>
                        <input type="text" className='iconfont' placeholder='  &#xe66f;   搜索商品名称' onClick={() => {
                            this.props.history.push('/ss')
                        }} />
                        <span className="iconfont" onClick={
                            () => {
                                this.props.history.push('/user')
                            }
                        }>&#xe676;</span>
                    </div>
                </div>
                {
                    this.state.unmount ?
                        <HomeHeaderSwiper {...this.props}>
                        </HomeHeaderSwiper>
                        : null
                }

                <ShowList isFixed={this.props.isFixed} myshowlist={(data) => {
                    this.setState({
                        isShow: data
                    })
                }}></ShowList >
                {
                    this.state.isShow ? <List hide={(mes => {
                        this.setState({
                            isShow: mes
                        })
                    })}></List> : null
                }

            </div>
        )
    }
    componentDidUpdate() {
        // console.log(this.props.myshowlist)
    }
    componentWillUnmount() {
        this.setState({
            unmount: false
        })
    }
}


export default HomeHeader
import React, { Component } from 'react'
import css from './index.module.scss'
import HomeHeaderSwiper from '../../../Components/Swiper/HomeHeaderSwiper'
import ShowList from '../../../Components/Home/ShowList'
import List from '../../../Components/Home/List'
class HomeHeader extends Component {
    state = {
        isShow: false
    }
    render() {
        return (
            <div className={css.box}>
                <div className={css.top}>
                    <div>
                        <span className="iconfont">&#xe661;</span>
                        <input type="text" className='iconfont' placeholder='  &#xe66f;   搜索商品名称' />
                        <span className="iconfont">&#xe676;</span>
                    </div>
                </div>
                <HomeHeaderSwiper {...this.props}>
                </HomeHeaderSwiper>
                <ShowList myshowlist={(data) => {
                    this.setState({
                        isShow: data
                    })
                }}></ShowList>
                {
                    this.state.isShow ? <List></List> : null
                }

            </div>
        )
    }
    componentDidUpdate() {
        // console.log(this.props.myshowlist)
    }
}


export default HomeHeader
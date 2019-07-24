import React, { Component } from 'react'
import HomeHeader from '../HomeHeader'
import axios from 'axios'
import Swiper from '../../../Components/Swiper'
class Home extends Component {
    state = {
        headList: [],
        swiperList: []
    }
    render() {
        return (
            <div>
                <HomeHeader {...this.state} />
                <Swiper {...this.state}></Swiper>

            </div>
        )
    }

    componentWillMount() {
        axios({
            method: 'post',
            url: '/v1/home/page',
            data: 'client_id=180100031051&channel_id=0&webp=1&page_type=home'
        }).then((resp) => {
            console.log(resp.data.data)
            this.setState({
                headList: resp.data.data.tabs,
                swiperList: resp.data.data.data.sections[0].body.items
            })
            // console.log(this.state)
        })
    }

}

export default Home
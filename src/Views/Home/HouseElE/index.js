import React, { Component } from 'react'
import Swiper from '../../../Components/Swiper/index'
import axios from 'axios'

class HouseELE extends Component {
    state = {
        swiperList: []
    }

    render() {
        return (
            <div>
                <Swiper {...this.state}></Swiper>
            </div>
        )
    }

    componentWillMount() {
        axios({
            method: 'post',
            url: '/v1/home/page',
            data: 'client_id=180100031051&channel_id=0&webp=1&page_type=activity&page_id=8556'
        }).then((resp) => {
            this.setState({
                swiperList: resp.data.data.data.sections[0].body.items
            })
        })
    }

}

export default HouseELE
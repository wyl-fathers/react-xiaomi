import React, { Component } from 'react'
import Recommend from './HomeRecommend'
import Phone from './Phone'
import TV from './TV'
import Live from './Live'
import MibbleComputer from './MibbleComputer'
import HouseElE from './HouseElE'
import Brain from './Brain'
import store from '../../Redux'
import axios from 'axios'
import HomeHeader from './HomeHeader'
import ScrollView from '../../Components/ScrollView'

class Home extends Component {
    state = {
        current: store.getState().current,
        headList: [],
        swiperList: [],
        dataList: null
    }
    a = null
    render() {
        return (
            <div>
                <HomeHeader {...this.state} {...this.props} />
                {
                    this.chooseComponent({ ...this.props })
                }
            </div>
        )
    }

    chooseComponent(data) {
        switch (this.state.current) {
            case 0:
                return <Recommend {...data} />
            case 1:
                return <Phone {...data} />
            case 2:
                return <Brain {...data} />
            case 3:
                return <TV {...data} />
            case 4:
                return <MibbleComputer {...data} />
            case 5:
                return <HouseElE {...data} />
            case 6:
                return <Live {...data} />

        }
    }
    componentWillMount() {
        console.log(this.props)
        axios({
            method: 'post',
            url: '/v1/home/page',
            data: 'client_id=180100031051&channel_id=0&webp=1&page_type=home'
        }).then((resp) => {
            // console.log(resp.data.data.data.sections)
            this.setState({
                headList: resp.data.data.tabs,
                swiperList: resp.data.data.data.sections[0].body.items,

            })
            // console.log(this.state)
        })

        this.a = store.subscribe(() => {
            this.setState({
                current: store.getState().current
            }, () => {
                // console.log(store.getState().current)
            })
        })
    }
    componentWillUnmount() {
        this.a()
    }

}

export default ScrollView(Home)
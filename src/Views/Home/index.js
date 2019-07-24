import React, { Component } from 'react'
import Recommend from './HomeRecommend'
import Phone from './Phone'
import TV from './TV'
import Live from './Live'
import MibbleComputer from './MibbleComputer'
import HouseElE from './HouseElE'
import Brain from './Brain'
import store from '../../Redux'
class Home extends Component {
    state = {
        current: store.getState().current
    }
    a = null
    render() {
        return (
            <div>
                {
                    this.chooseComponent()
                }
                {/* <Recommend></Recommend> */}
            </div>
        )
    }

    chooseComponent() {
        switch (this.state.current) {
            case 0:
                return <Recommend />
            case 1:
                return <Phone />
            case 2:
                return <Brain />
            case 3:
                return <TV />
            case 4:
                return <MibbleComputer />
            case 5:
                return <HouseElE />
            case 6:
                return <Live />

        }
    }
    componentWillMount() {
        this.a = store.subscribe(() => {
            this.setState({
                current: store.getState().current
            }, () => {
                console.log(store.getState().current)
            })
        })
    }
    componentWillUnmount() {
        this.a()
    }

}

export default Home
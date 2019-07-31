import React, { Component } from 'react'
import Cartlist from './Cartlist'
import Cnxh from '../../Components/Cnxh'
import Cartbuy from './Cartbuy'
import store from "../../Redux"
class Cart extends Component {

    state = {
        datalist: [],
        showList: store.getState().showcartList


    }
    ccc = null
    render() {
        return (
            <div className="Cart">
                <Cartbuy  {...this.props}></Cartbuy>
                {
                    this.state.showList ?
                        <Cartlist  {...this.props}></Cartlist> : null
                }
                <Cnxh {...this.props}></Cnxh>

                {
                    this.props.children
                }
            </div>
        )
    }


    componentWillMount() {
        this.ccc = store.subscribe(() => {
            this.setState({
                showList: store.getState().showcartList
            })
        })
    }

    componentWillUnmount() {
        this.ccc()
    }


}

export default Cart
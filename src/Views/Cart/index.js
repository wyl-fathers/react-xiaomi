import React, { Component } from 'react'
import Cartlist from './Cartlist'
import Cnxh from '../../Components/Cnxh'
import Cartbuy from './Cartbuy'

class Cart extends Component {

    state={
        datalist:[],


    }

    render() {
        return (
            <div className="Cart">
            <Cartbuy  {...this.props}></Cartbuy>
           <Cartlist  {...this.props}></Cartlist>
           <Cnxh></Cnxh>

                {
          this.props.children
        }
            </div>
        )
    }
}

export default Cart
import React, { Component } from 'react'
import css from './index.module.scss'



class Cartlist extends Component {
    render() {
        return (
            <div className={css.Carlist}>
                <div className={css.box}>
                    <span className="iconfont sj_car">&#xe64f;</span>
                    <span className={css.wenzi}>购物车还是空的</span>
                    <span className={css.qgg} onClick={()=>{
                        this.props.history.push('/home')
                    }}>去逛逛</span>

                </div>
            </div>

        )
    }
}

export default Cartlist
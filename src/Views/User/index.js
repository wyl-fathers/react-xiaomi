import React, { Component } from 'react'
import css from './index.scss'

class User extends Component {
  render() {
    return (
      <div className={css.user}>
        <header className="zjf_hd">
          <div className="user ui_flex align_center" onClick={() => {
            this.props.history.push('/login')
          }}>
            <div className="zjf_img">
              <img src="/img/avatar.png" />
            </div>
            <div className="zjf_name">登录/注册</div>
          </div>
        </header>
        <div className="b1 ui_flex align_center justify_space_between" onClick={() => {
          this.props.history.push('/login')
        }}>
          <div className="cite">我的订单</div>
          <div className="span ui_flex align_center">
            <div>
              全部订单
                        <span className="iconfont">&#xe66e;</span>
            </div>
          </div>
        </div>
        <ul className="b2 ui_flex align_center justify_space_between" onClick={() => {
          this.props.history.push('/login')
        }}>
          <li className="dfk">
            <div>
              <div className="iconfont"></div>
              <span>待付款</span>
            </div>
          </li>
          <li className="dah">
            <div>
              <div className="iconfont"></div>
              <span>待收货</span>

            </div>
          </li>
          <li className="thx">
            <div>
              <div className="iconfont"></div>
              <span>退换修</span>
            </div>
          </li>
        </ul>
        <div className="ui_line"></div>
        <ul className="items">
          <li className="i_member">
            <div onClick={() => {
              this.props.history.push('/mpointsmall')
            }}>
              <cite>会员中心</cite>
            </div>
          </li>
          <li className="i_wallet">
            <div onClick={() => {
              this.props.history.push('/login')
            }}>
              <cite >我的优惠</cite>
            </div>
          </li>
        </ul>
        <div className="ui_line"></div>
        <ul className="items">
          <li className="i_service">
            <div onClick={() => {
              this.props.history.push('/services')
            }}>
              <cite>服务中心</cite>
            </div>
          </li>
          <li className="i_mihome">
            <div onClick={() => {
              this.props.history.push('/maplocation')
            }}>
              <cite>小米之家</cite>
            </div>
          </li>
        </ul>
        <div className="ui_line"></div>
        <ul className="items">
          <li className="i_fcode">
            <div onClick={() => {
              this.props.history.push('/login')
            }}>
              <cite>F码通道</cite>
            </div>
          </li>
        </ul>
        <div className="ui_line"></div>
        <ul className="items">
          <li className="i_setting">
            <div onClick={() => {
              this.props.history.push('/login')
            }}>
              <cite>设置</cite>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default User
import React, { Component } from 'react'
import css from './index.scss'

class User extends Component {
    render() {
        return (
            <div className={css.user}>
                 <header className="zjf_hd">
                    <div className="user ui_flex align_center">
                        <div className="zjf_img">
                            <img src="/img/avatar.png" />
                        </div>
                        <div  className="zjf_name">登录/注册</div>
                    </div>
                 </header>
                 <div className="b1 ui_flex align_center justify_space_between">
                    <div className="cite">我的订单</div>
                    <div className="span ui_flex align_center">
                      <div>
                        全部订单
                        <span className="iconfont">&#xe66e;</span>
                      </div>
                    </div>
                 </div>
                 <ul className="b2 ui_flex align_center justify_space_between">
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
                     <div>
                       <cite>会员中心</cite>
                     </div>
                   </li>
                   <li className="i_wallet">
                     <div>
                       <cite>我的优惠</cite>
                     </div>
                   </li>
                 </ul>
                 <div className="ui_line"></div>
                 <ul className="items">
                   <li className="i_service">
                     <div>
                       <cite>服务中心</cite>
                     </div>
                   </li>
                   <li className="i_mihome">
                     <div>
                       <cite>小米之家</cite>
                     </div>
                   </li>
                 </ul>
                 <div className="ui_line"></div>
                 <ul className="items">
                   <li className="i_fcode">
                     <div>
                       <cite>F码通道</cite>
                     </div>
                   </li>
                 </ul>
                 <div className="ui_line"></div>
                 <ul className="items">
                   <li className="i_setting">
                     <div>
                       <cite>设置</cite>
                     </div>
                   </li>
                 </ul>
            </div>
        )
    }
}

export default User
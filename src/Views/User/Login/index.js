import React, { Component } from 'react'
import css from './index.scss'
 class Pass extends Component {
    render(){
        return(
            <div>
                <div  className="layout">
      <div>
        
        <div  className="lgnheader">
          <div  className="header_tit t_c">
            <em id="custom_display_1"  className="milogo">
              <svg width="100%" height="100%" version="1.1">
                <rect width="48" height="48" rx="3" ry="3" className="FF6700"/>
                <rect x="10" y="15" width="4.2" height="18" className="FFF"/>
                <rect x="33.75" y="15" width="4.2" height="18" className="FFF"/>
                <rect x="11.25" y="15" width="15" height="4.1" className="FFF"/>
                <rect x="26.2" y="20.55" width="4.2" height="12.5" className="FFF"/>
                <rect
                  x="20.6"
                  y="15"
                  width="9.8"
                  height="9.8"
                  rx="4.4"
                  ry="4.4"
                  className="FFF"/>
                <rect x="20.2" y="19" width="6" height="6" rx="2" ry="2" className="FF6700"/>
                <rect x="18" y="19.1" width="4" height="2.2" className="FF6700"/>
                <rect x="24.2" y="23" width="1.94" height="10" className="FF6700"/>
                <rect x="18.1" y="22.8" width="4.2" height="10.2" className="FFF"/>
              </svg>
            </em>
            <h4  className="header_tit_txt" id="login-title">小米帐号登录</h4>
            <div  className="site_info"></div>
          </div>
        </div>
      </div>
      <div  className="tabs-con tabs_con now" data-con="pwd">
        <div>
          <div  className="login_area">
            <form action="/pass/serviceLoginAuth2" method="POST" id="login-main-form">
              <div  className="loginbox c_b">
                
                <div  className="lgn_inputbg c_b login-panel pwdLogin sms_login">
                 
                  <div  className="single_imgarea" id="account-info">
                    <div  className="na-img-area" id="account-avator" >
                      <div  className="na-img-bg-area" id="account-avator-con"></div>
                    </div>
                    <p  className="us_name tac" id="account-displayname"></p>
                    <p  className="us_id tac"></p>
                  </div>
                  <label
                    id="region-code"
                     className="labelbox login_user c_b disable add_regioncode"
                    for
                  >
                    <div  className="turn_area">
                      {/* <!-- <a  className="btn_turn" id="manual_code" href="javascript:void(0);" title="关闭国家码"></a> --> */}
                    </div>
                    {/* <!-- <div  className="country_list">
                      <div  className="animation countrycode_selector" id="countrycode_selector">
                        <span  className="country_code">
                          <tt  className="countrycode-value" id="countrycode_value">+86</tt>
                          <i  className="icon_arrow_down"></i>
                        </span>
                      </div>
                    </div>--> */}
                    <input
                       className="item_account"
                      autocomplete="off"
                      type="tel"
                      name="user"
                      id="username"
                      placeholder="小米账号/邮箱/手机号"
                      _type="tel"
                    />
                    <div id="btn-clear-link"  className="clear_link_panel">
                      <span  className="clear_link"></span>
                    </div>
                  </label>
                  {/* <div  className="country-container" id="countrycode_container" style="display: none;">
                    <div  className="country_container_con" id="countrycode_container_con"></div>
                  </div> */}
                  <div id="captcha"></div>
                  <label  className="labelbox pwd_panel c_b">
                    <input
                       className="item_account"
                      type="password"
                      placeholder="密码"
                      autocomplete="off"
                      id="pwd"
                      name="password"
                      _type="number"
                    />
                    {/* <!-- <input
                       className="item_account"
                      type="text"
                      placeholder="密码"
                      autocomplete="off"
                      id="visiablePwd"
                      name="visiablepwd"
                      style="display:none"
                    />--> */}
                    {/* <!-- <div  className="eye_panel pwd-visiable">
                      <i  className="eye pwd-eye">
                        <svg
                          width="100%"
                          height="100%"
                          version="1.1"
                        > 
                          <path  className="eye_outer" d="M0 8 C6 0,14 0,20 8, 14 16,6 16, 0 8 z" />
                          <circle  className="eye_inner" cx="10" cy="8" r="3" />
                        </svg>
                      </i>
                    </div>--> */}
                    
                  </label>
                </div>
                

                <div  className="err_tip">
                  <div>
                    <em  className="icon_error"></em>
                    <span  className="error-con"></span>
                  </div>
                </div>
                <div  className="btns_bg">
                  <input  className="btnadpt" id="login-button" type="submit" value="注册" />
                  {/* <span
                    id="custom_display_8"
                     className="sns-default-container sns_default_container"
                    style="display: none;"
                  ></span> */}
                </div>
                <div  className="other_panel clearfix">
                  <span id="custom_display_256"  className="sms_link">
                    <div
                       className="btnadpt btn_gray login_type_link"
                      id="ChangeLoginType"
                    >立即登录</div>
                  </span>
                  
                  
                  <div
                    // style="display: block;"
                     className="other_login_type sns-login-container"
                    id="custom_display_16"
                  >
                    <fieldset  className="oth_type_tit">
                      <legend align="center"  className="oth_type_txt">其他方式登录</legend>
                    </fieldset>
                    <div id="sns-login-links"  className="oth_type_links">
                      <div
                         className="icon_type btn_qq sns-login-link"
                        data-type="qq"
                        title="QQ登录"
                        target="_blank"
                      >
                        <i  className="btn_sns_icontype icon_default_qq"></i>
                      </div>
                      <div
                         className="icon_type btn_weibo sns-login-link"
                        data-type="weibo"
                        title="微博登录"
                        target="_blank"
                      >
                        <i  className="btn_sns_icontype icon_default_weibo"></i>
                      </div>
                      <div
                         className="icon_type btn_alipay sns-login-link"
                        data-type="alipay"
                        title="支付宝登录"
                        target="_blank"
                      >
                        <i  className="btn_sns_icontype icon_default_alipay"></i>
                      </div>
                      <div
                         className="icon_type btn_weixin sns-login-link"
                        data-type="weixin"
                        title="微信登录"
                        target="_blank"
                      >
                        <i  className="btn_sns_icontype icon_default_weixin"></i>
                      </div>
                    </div>
                  </div>
                  
                  
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
    <div id="custom_display_4"  className="n-footer">
      <div  className="nf-link-area clearfix">
        <ul  className="lang-select-list">
          <li>
            <div data-lang="zh_CN"  className="lang-select-li current">简体|</div>
          </li>
          <li>
            <div data-lang="zh_TW"  className="lang-select-li">繁体 |</div>
          </li>
          <li>
            <div data-lang="en"  className="lang-select-li">English |</div>
          </li>
          <li>
            <div>常见问题 |</div>
          </li>
          <li>
            <div id="msg-privacy" target="_blank">隐私政策</div>
          </li>
        </ul>
      </div>
      
    </div>
            </div>
        )
    }
}
export default Pass
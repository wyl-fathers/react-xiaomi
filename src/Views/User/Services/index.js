import React, { Component } from 'react'
import css from './index.scss'
import axios from 'axios'
class Services extends Component {
    state = {
        list:null
    }
    componentWillMount(){
        axios({
            method:"post",
            url:"/v1/service/list",
            data:"client_id=180100031051&channel_id=0&webp=1"
        }).then(res=>{
            console.log(res.data.data.service_icon_list.data_json)
            this.setState({
                list:res.data.data.service_icon_list.data_json
            })
        })
}
    render(){
        return(
            <div>
                <div className="servicesNav">
                  <h4>自助服务</h4>
                  <div>
                    
                     {
                         this.state.list?<div className="services">
                            {this.state.list.map(item=>{
                                return<div key={item.title}>
                                    <img src={item.img_url}/>
                                    {/* <p>{item.title}</p> */}
                                </div>
                            })}
                         </div>:null
                     }
                    
                  </div>
                </div>

                {/* <div>
                    <div>
                        <div>
                            <div>
                                img
                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="online-customer-service">
                    <div className="warp"> 
                      <div>
                        <img src="/img/icon.png" />
                        <span>7x24小时在线客服</span>
                      </div>
                    </div>
                    <div className="tel">
                      <ul>
                        <li>
                          <div>
                            <img src="/img/blue.png" />
                            <h3>商城热线</h3>
                            <p className="hl">400-100-5678</p>
                            <p>8:00 - 18:00</p>
                          </div>
                        </li>
                        <li>
                          <div>
                            <img src="/img/lv.png" />
                            <h3>金融热线</h3>
                            <p className="hl">400-100-3399</p>
                            <p>9:00 - 19:00</p>
                          </div>
                        </li> 
                        <li>
                          <div>
                            <img src="/img/hong.png" />
                            <h3>小米移动</h3>
                            <p className="hl">400-922-3838</p>
                            <p>8:00 - 18:00</p>
                          </div>
                        </li>
                      </ul>
                    </div>
                </div>
            </div>
        )
    }
}
export default Services
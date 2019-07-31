import React, { Component } from 'react'
import Swiper from '../../../Components/Swiper/index'
import axios from 'axios'
import css from './index.module.scss'
class Phone extends Component {
    state = {
        swiperList: [],
        dataList: null

    }
    render() {
        return (
            <div className={css.Phone}>
                <Swiper {...this.state}></Swiper>
                {
                    this.state.dataList ? this.state.dataList.map((item, index) => {
                        return <div className={item.view_type + '_ELE_' + index} key={'father' + index}>
                            {item.body.items ? item.body.items.map((el, index) => {
                                return <div key={index + 'father_inmg'} onClick={() => {
                                    if (el.product_id) {
                                        this.props.history.push(`/detail${el.product_id}`)
                                    } else {
                                        alert('商品已售空')
                                    }
                                }}>
                                    <img src={el.img_url} alt={el.ad_position_id} key={el.img_url + 'img'} />
                                    <div key={el.img_url + 'father_P'}>
                                        {
                                            el.action_title ? <h3>{el.action_title}&gt;</h3> : null
                                        }
                                        {
                                            el.product_name ? <p>
                                                {el.product_name}
                                            </p> : null
                                        }
                                        {
                                            el.product_brief ? <p>
                                                {el.product_brief}
                                            </p> : null
                                        }
                                        {
                                            el.product_price ? <p>
                                                ￥
                                                <span>{el.product_price}</span>
                                                起
                                                &nbsp;
                                                    <span className={el.product_price === el.product_org_price ? `${css.through}` : `${css.nothrough}`}>￥{el.product_org_price}</span>
                                            </p> : null
                                        }
                                        {
                                            el.product_price ? <button>立即购买</button> : null
                                        }
                                    </div>
                                </div>
                            }) : null}
                        </div>
                    })
                        : null
                }
            </div>
        )
    }
    componentDidMount() {
        axios({
            method: 'post',
            url: '/v1/home/page',
            data: 'client_id=180100031051&channel_id=0&webp=1&page_type=activity&page_id=8235'
        }).then((resp) => {
            this.setState({
                swiperList: resp.data.data.data.sections[0].body.items,
                dataList: resp.data.data.data.sections.filter((item, index) => {
                    return index > 0
                })
            })
        })
    }
}

export default Phone
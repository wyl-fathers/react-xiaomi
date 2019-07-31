import React, { Component } from 'react'
import axios from 'axios'
import GoBack from '../../Components/GoBack'
import css from './index.module.scss'
import CNXH from '../../Components/Cnxh'
import store from '../../Redux'
class SearchPage extends Component {
    state = {
        searchName: null,
        dataList: null
    }

    render() {
        return (

            <div className={css.SS}>

                <div className={css.box}>
                    <div className={css.one}>
                        <GoBack {...this.props}></GoBack>

                    </div>
                    <div className={css.two}>
                        <input type="text" placeholder="    搜索商品名称" onInput={() => {
                            axios({
                                method: 'post',
                                url: '/v1/hisearch/suggestion_v3',
                                data: `client_id=180100031051&channel_id=0&webp=1&query=${this.refs.input.value}`
                            }).then((resp) => {
                                if (!resp.data.data) {
                                    this.setState({
                                        searchName: null
                                    })
                                    return
                                }
                                this.setState({
                                    searchName: resp.data.data.list
                                })
                            })
                        }} ref='input' />
                    </div>
                    <div className={css.three}>
                        <span style={{ height: '0.5em' }} className="iconfont">&#xe66f;</span>
                    </div>
                </div>

                {this.state.searchName && this.state.searchName.length ?
                    <div className={css.list} style={{
                        height: window.screen.availHeight / 100 - 0.5 + 'rem'
                    }}>
                        <ul>
                            {
                                this.state.searchName && this.state.searchName.length ? this.state.searchName.map((item, index) => {
                                    return <li key={'disc' + index} onClick={() => {

                                        this.setState({
                                            searchName: null
                                        }, () => {
                                            this.refs.input.value = ''
                                        })
                                        this.props.history.push(`/search=${item.title}`)
                                    }}>
                                        {item.title}
                                    </li>
                                }) : null
                            }
                        </ul>


                    </div> : null
                }

                {
                    this.state.dataList ? this.state.dataList.map((item, index) => {
                        return <div key={'ss_shop2_father' + index}>
                            {
                                item.view_type !== "view_recommend_class" ? <div key={'ss_shop_1' + index} className="div_father" onClick={() => {
                                    if (item.body.product_id) {

                                        this.props.history.push(`/detail${item.body.product_id}`)
                                    } else {
                                        alert('商品已售空')
                                    }
                                }}>
                                    <div key={'ss_shop1' + index} className='img_father'>
                                        {
                                            item.body.image ? <img src={item.body.image} alt="" key={'ss_shop2_img' + index} /> : <img src={item.body.img_url} alt="" key={'ss_shop2_img' + index} />
                                        }
                                    </div>
                                    <div key={'ss_shop2' + index} className="p_father">
                                        <h5 key={'ss_shop2_h5' + index}>{item.body.name}</h5>
                                        <p key={'ss_shop2_p' + index} dangerouslySetInnerHTML={{ __html: item.body.desc }}></p>
                                        {
                                            item.body.price ? <h3 key={'ss_shop2_h4' + index}>￥{item.body.price}</h3> : <h3 key={'ss_shop2_h4' + index}></h3>

                                        }
                                    </div>
                                </div>
                                    : <div key={'ss_shop2_div' + index}>
                                        <h3 className="h3_2" key={'ss_shop2_h3' + index}> {item.body.recommend_title}</h3>

                                        <ul key={'ss_shop2_ul' + index} className='ul_1'>
                                            {
                                                item.body.recommend_class.map((el, index1) => {
                                                    return <li key={'ss_shop2_li' + index1} onClick={() => {
                                                        this.props.history.push(`/search=${el.name}`)
                                                    }}>
                                                        {el.name}
                                                    </li>
                                                })
                                            }
                                        </ul>
                                    </div>
                            }
                        </div>
                    }) : null
                }



                <CNXH></CNXH>
            </div>
        )
    }


    componentWillMount() {
        store.dispatch({
            type: 'HideNabar',
            payload: false
        })
        axios({
            method: 'post',
            url: "/v1/hisearch/query_v3",
            data: `client_id=180100031051&channel_id=0&webp=1&query=${this.props.match.params.searchname}&version=2&page_index=1&page_size=20`
        }).then((resp) => {
            console.log(resp.data.data.list_v2)
            this.setState({
                dataList: resp.data.data.list_v2
            })
        })
    }

    componentWillReceiveProps(nextProps) {
        axios({
            method: 'post',
            url: "/v1/hisearch/query_v3",
            data: `client_id=180100031051&channel_id=0&webp=1&query=${nextProps.match.params.searchname}&version=2&page_index=1&page_size=20`
        }).then((resp) => {
            console.log(resp.data.data.list_v2)
            this.setState({
                dataList: resp.data.data.list_v2
            })
        })
    }


    componentWillUnmount() {
        store.dispatch({
            type: 'ShowNabar',
            payload: true
        })

    }



}

export default SearchPage

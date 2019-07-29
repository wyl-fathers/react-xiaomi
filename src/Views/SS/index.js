import React, { Component } from 'react'
import GoBack from '../../Components/GoBack'
import css from './index.module.scss'
import axios from 'axios'
class SS extends Component {
    state = {
        firstList: null,
        hot_class: null,
        keywords: null,
        searchName: null
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
                                        this.props.history.push(`/search=${item.title}`)

                                    }}>
                                        {item.title}
                                    </li>
                                }) : null
                            }
                        </ul>


                    </div> : null
                }


                <h4>热门搜索</h4>
                <div className={css.Firstimg}>
                    {
                        this.state.firstList ? <img src={this.state.firstList} alt={this.state.firstList} /> : null
                    }
                </div>

                <div className={css.keywords}>
                    {
                        this.state.keywords ? this.state.keywords.map((item, index) => {
                            return <div key={index + 'sz'} style={{ background: item.back_n, border: `0.01rem ${item.border_n} solid` }} onClick={() => {
                                this.props.history.push(`/search=${item.word}`)
                            }}>
                                {item.word}
                            </div>
                        }) : null
                    }
                </div>


                <h4>常用分类</h4>
                <div className={css.hot_class}>
                    {
                        this.state.hot_class ? this.state.hot_class.map((item, index) => {
                            return <div key={item.parameter_id}>
                                {item.name}
                            </div>
                        }) : null
                    }
                </div>
            </div >
        )
    }


    componentWillMount() {
        axios({
            method: 'post',
            url: '/v1/hisearch/se_default',
            data: 'client_id=180100031051&channel_id=0&webp=1'
        }).then((resp) => {
            // console.log(resp.data)
            this.setState({
                firstList: resp.data.data.ad_list[0].body.items[0].img_url,
                hot_class: resp.data.data.hot_class.filter((item, index) => index < 13),
                keywords: resp.data.data.keywords
            })
        })
    }
}

export default SS

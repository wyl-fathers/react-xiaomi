import React, { Component } from 'react'
import css from './index.module.scss'
import axios from 'axios'


class Cnxh extends Component {

    state = {
        datalist: []
    }

    componentDidMount() {
        axios({
            method: "post",
            url: "/v1/home/recommendBlank",
            data:
                "client_id=180100031051&channel_id=0&webp=1&source=list&recommend_tag=XMGUEST-4DE00030-A142-11E9-B821-1F90296FF9DF"
        }).then(res => {
            this.setState({
                datalist: res.data.data.recom_list
            })
            console.log(this.state.datalist);
        });
    }

    render() {
        return (
            <div>
                <div className={css.pic1}>
                    <img src='/img/cnxh.jpg' />
                </div>

                <ul className={css.cnxhlist}>
                    {
                        this.state.datalist.map(item =>
                            <li key={item.action.path}>
                                <img src={item.image_url}/>
                                <h3 key={'name'+item.action.path}>{item.name}</h3>
                                <div className={css.goods}>
                                    <div className={css.price}>￥{item.price}
                                    {
                                        item.price!==item.market_price?<span >{item.market_price}</span>:
                                        null
                                    }
                                    </div>
                                </div>
                            </li>
                        )
                    }                
                
                </ul>


            </div>
        )

    }

    

}

export default Cnxh
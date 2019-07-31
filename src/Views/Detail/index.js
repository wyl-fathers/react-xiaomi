import React, { Component } from 'react';
import Swiper from '../../Components/Swiper'
import axios from 'axios'
import css from './index.module.scss'
import Activies from './Activies'
import store from '../../Redux'
import Cnxh from '../../Components/Cnxh'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile';
import 'antd-mobile/dist/antd-mobile.css';
function successToast() {
  console.log(1)
  Toast.success('Load success !!!', 1);
}

class Detail extends Component {
  state = {
    swiperList: [],
    productName: null,
    productDesc: null,
    marketPrice: null,
    imgList: [],
    newImgList: null,
    detailSwiperList: [],
    relatedList: [],
    goodsName: null,
    id: this.props.match.params.id,
    aaa: null
  }

  render() {
    return (
      <div>
        <div className='iconfont detail_goback' {...this.props} onClick={() => {
          this.props.history.goBack()
        }}>&#xe66d;</div>
        <div className={css.root}>
          {this.state.swiperList ? <Swiper {...this.state} className={css.sqm} key={'asdasdsad' + this.state.aaa}></Swiper> : null}
        </div>
        <div>
          <h1 style={{ fontWeight: 'normal', textIndent: '.1rem', color: '#3c3c3c' }}>{this.state.productName}</h1>
          <div dangerouslySetInnerHTML={{ __html: this.state.productDesc }} style={{ wordBreak: 'break-all', width: '3.4185rem', fontSize: '.125067rem', marginLeft: '.15rem', textAlign: 'left', color: 'rgba(0,0,0,.54)' }}></div >
          <h2 style={{ color: '#f60' }}>￥{this.state.marketPrice}</h2>
        </div>
        {this.state.detailSwiperList ?
          <div style={{ overflow: "auto" }}>
            <ul style={{ height: '.623rem', width: '7.8786rem', display: "flex" }}>
              {
                this.state.detailSwiperList.map((item, index) =>
                  item.icon ? <li key={index + 'li'} style={{ width: '.8754rem', height: '.623rem', textAlign: 'center' }} >
                    <img alt={'图片飞走了'} src={item.icon} key={index + 'img'} style={{ height: '0.2084rem', width: '.2084rem', margin: 'auto' }} />
                    <p key={index + 'p2'} style={{ fontSize: '.120567rem' }}>{item.top_title}</p>
                    <p key={index + 'p1'} style={{ fontSize: '.10422rem', width: '.8754rem', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>{item.bottom_title}</p>
                  </li> : null
                )
              }
            </ul>
          </div> : null
        }
        <Activies></Activies>
        <div className={css.section}>
          <div className={css.info}>
            <span className={css.checked}>已选</span>
            {this.state.goodsName}
          </div>
          <div className={css.adds}>
            <span className={css.destination}>送至</span>
            北京市&nbsp;东城区&nbsp;&nbsp;&nbsp;&nbsp;
                <span className={css.have}>有现货</span>
          </div>
          <div className={css.serive}>
            <img src={require('./imgs/server.png')} alt={'图片飞走了'} />
            <span>小米自营</span>
            <img src={require('./imgs/server.png')} alt={'图片飞走了'} />
            <span>小米发货</span>
            <img src={require('./imgs/server.png')} alt={'图片飞走了'} />
            <span>七天无理由退货</span>
          </div>
        </div>
        {
          this.state.relatedList ? <div>
            <h2 style={{ textAlign: 'center', color: '#f60', background: '#e5e5e5', width: '3.4185rem', margin: '.2rem 0 0 .15rem', borderRadius: '.1rem .1rem 0 0', height: '.4169rem', lineHeight: '.4169rem' }}>相关推荐</h2>
            <div style={{ overflow: "auto", margin: '0 0 .2rem .15rem', background: '#e5e5e5', width: '3.4185rem', borderRadius: '0 0 .1rem .1rem', padding: '.166756rem 0' }}>
              <ul style={{ height: '1.27058rem', display: "flex" }}>
                {
                  this.state.relatedList.map((item, index) =>
                    <li key={index + 'li'} style={{ width: '.9379rem', height: '1.2706rem', textAlign: 'center', padding: '0 .041689rem 0', }}>
                      <img alt={'图片回家吃饭了'} src={item.image_url} key={index + 'img'} style={{ height: '0.8545rem', width: '0.8545rem', margin: 'auto', borderRadius: '.1rem' }} />
                      <p key={index + 'p2'} style={{ fontSize: '.120567rem', marginTop: '.104222rem' }}>{item.name}</p>
                      <p key={index + 'p1'} style={{ fontSize: '.10422rem', color: '#f60' }}>￥{item.price}</p>
                    </li>
                  )
                }
              </ul>
            </div>
          </div> : null
        }
        {
          this.state.newImgList ? this.state.newImgList.sections.map((item, index) =>
            <div key={index + 'sqm_1'}>
              <img key={index + 'sqm_2'} alt={item.body.img_url} src={item.body.img_url} style={{ width: '100%' }} />
            </div>
          ) : null
        }
        <div className={css.float}>
          <div className={css.home}>
            <span className="iconfont">&#xe615;</span><br />
            <span onClick={this.handleHome}>首页</span>
          </div>
          <div className={css.cart}>
            <span className="iconfont">&#xe657;</span><br />
            <span onClick={this.handleCart}>购物车</span>
          </div>
          <p onClick={this.handleAddCart}>加入购物车</p>
        </div>
        <Cnxh  {...this.props} />
      </div>)
  }

  handleHome = () => {
    this.props.history.push('/home')
  }
  handleCart = () => {
    this.props.history.push('/cart')
  }
  handleAddCart = () => {
    // this.props.history.push({
    //   pathname: '/cart',
    //   state: {
    //     id: 11
    //   }
    // })

    successToast()

    store.dispatch({
      type: 'addList',
      payload: {
        id: this.state.id,
        name: this.state.productName,
        price: this.state.marketPrice,
        img: this.state.swiperList[1].img_url,
        number: 1
      }
    })
  }


  componentWillReceiveProps(data) {
    axios({
      method: 'post',
      url: '/v1/miproduct/view',
      data: `client_id=180100031051&channel_id=0&webp=1&commodity_id=${data.match.params.id}&pid=${data.match.params.id}`
    }).then((resp) => {
      // console.log(resp.data.data.view_content.galleryView)
      this.setState({
        // swiperList: resp.data.data.goods_info[0].gallery_v3 ? resp.data.data.goods_info[0].gallery_v3 : resp.data.data.view_content.galleryView.galleryView,
        swiperList: resp.data.data.goods_info[0].gallery_v3,
        productName: resp.data.data.product_info.name,
        productDesc: resp.data.data.product_info.product_desc,
        marketPrice: resp.data.data.goods_info[0].market_price,
        imgList: resp.data.data.goods_tpl_datas,
        detailSwiperList: resp.data.data.goods_info[0].class_parameters.list,
        relatedList: resp.data.data.related_recommend.data,
        goodsName: resp.data.data.goods_info[0].name,
        aaa: 22
      }, () => {
        this.setState({
          aaa: 0
        }, () => {
          document.documentElement.scrollTop = 0 + 'px'
        })
        // console.log(this.state.swiperList, resp.data.data.view_content.galleryView.galleryView)
      })
      for (var i in this.state.imgList) {
        this.setState({
          newImgList: this.state.imgList[i]
        })
      }
    })



  }

  componentWillMount() {
    document.documentElement.scrollTop = 0 + 'px'

    store.dispatch({
      type: "HideNabar",
      payload: false
    })

    axios({
      method: 'post',
      url: '/v1/miproduct/view',
      data: `client_id=180100031051&channel_id=0&webp=1&commodity_id=${this.state.id}&pid=${this.state.id}`
    }).then((resp) => {
      // console.log(resp.data.data.view_content.galleryView)
      this.setState({
        // swiperList: resp.data.data.goods_info[0].gallery_v3 ? resp.data.data.goods_info[0].gallery_v3 : resp.data.data.view_content.galleryView.galleryView,
        swiperList: resp.data.data.goods_info[0].gallery_v3,
        productName: resp.data.data.product_info.name,
        productDesc: resp.data.data.product_info.product_desc,
        marketPrice: resp.data.data.goods_info[0].market_price,
        imgList: resp.data.data.goods_tpl_datas,
        detailSwiperList: resp.data.data.goods_info[0].class_parameters.list,
        relatedList: resp.data.data.related_recommend.data,
        goodsName: resp.data.data.goods_info[0].name,
      }, () => {
        // console.log(this.state.swiperList, resp.data.data.view_content.galleryView.galleryView)
      })
      for (var i in this.state.imgList) {
        this.setState({
          newImgList: this.state.imgList[i]
        })
      }
    })
  }



  componentWillUnmount() {
    store.dispatch({
      type: "ShowNabar",
      payload: true
    })
  }

}







export default Detail
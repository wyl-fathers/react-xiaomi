import React, { Component } from 'react'
import css from './index.module.scss'

class Cartbuy extends Component {
    state = {
        sj: [],
        sum: 0,
        datalist: [
            {
                id: 1,
                name: '小米22222',
                price: 1000,
                img: './img/jia.jpg',
                number: 1
            },

            {
                id: 2,
                name: '小米22222',
                price: 1000,
                img: './img/jia.jpg',
                number: 1

            },

            {
                id: 3,
                name: '小米22222',
                price: 1000,
                img: './img/jia.jpg',
                number: 1

            }
        ]

    }

    render() {
        return (
            <div className={css.wyl}>
                <ul className={css.all}>
                    {

                        this.state.datalist.map((item, index) =>
                            <li key={item.id}>
                                <div className={css.choose}><div className={(this.state.sj.indexOf(index) > -1) ? "sj_yuan iconfont" + ' ' + 'sj_check' : "sj_yuan iconfont"} onClick={() => {
                                    if (this.state.sj.indexOf(index) > -1) {

                                        var a = [...this.state.sj]
                                        a.splice(this.state.sj.indexOf(index), 1)
                                        this.setState({
                                            sj: a
                                        })

                                    } else {
                                        this.setState({
                                            sj: [...this.state.sj, index]
                                        })
                                    }

                                }}>&#xe65d;</div></div>
                                <img src={item.img} />
                                <div className={css.gright}>
                                    <div className={css.name}>{item.name}</div>
                                    <span>售价： {item.price}元</span>
                                    <div className={css.num}>
                                        <div className={css.del} onClick={() => {
                                            var wyl = [...this.state.datalist]
                                            wyl[index].number--
                                            this.setState({
                                                datalist:wyl
                                            },()=>{
                                                if (wyl[index].number <=1) {
                                                    wyl[index].number=1
                                                    this.setState({
                                                        datalist:wyl
                                                    })
                                                  }
                                            })
                                            } } >-</div>
                                        <div className={css.n}>{item.number}</div>
                                        <div className={css.add} onClick={() => {
                                            var zxc = [...this.state.datalist]
                                            zxc[index].number++
                                            this.setState({
                                                datalist:zxc
                                            })
                                            }  }>+</div>
                                        <div className="sj_delall iconfont"  >&#xe663;</div>
                                    </div>
                                </div>
                            </li>)
                    }
                </ul>


                <div className={css.sum}>
                    <div className={css.price}>
                        <span>金额：</span>
                        <strong>￥{this.allsum()}</strong>
                    </div>
                    <div className={css.gohome} onClick={() => {
                        this.props.history.push('/home')
                    }}>继续购物</div>
                    <div className={css.getsum} onClick={() => {
                        this.props.history.push('/home')
                    }}>去结算</div>
                </div>


            </div>
        )

    }

    shouldComponentUpdate(nextp, nexts) {
        return true
    }

    allsum() {
        let sum = 0;

        var sj_list = [];
       this.state.sj.forEach(el => {
            sj_list.push(this.state.datalist[el]);
        });

        sj_list.forEach((sj, index) => {
            sum += sj.price * sj.number;
        });

        this.sum = sum;
        return sum;

    }



}

export default Cartbuy
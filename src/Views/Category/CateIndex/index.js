import React, { Component } from 'react'
import css from './index.module.scss'

class CateIndex extends Component {
    state = {
        CateIndex: null,
        list: null
    }
    render() {
        return (
            <div className={css.CateIndex + ' ' + 'lzc'}>
                <div className={css.box}>
                    {
                        this.state.CateIndex ? this.state.CateIndex.map((item, index) => {
                            return <div key={index + 'ccc'}  >
                                {
                                    item.category_name ? <h4 className='category_name'>{item.category_name}</h4> : null
                                }
                                {
                                    item.category_list.map((el, index) => {
                                        return <div className={el.view_type} key={'c' + index}>
                                            {
                                                el.body.items ? el.body.items.map((data) => {
                                                    return <div key={'cc' + data.product_name + index} onClick={() => {
                                                        if (data.action.path) {

                                                            this.props.history.push(`/detail${data.action.path}`)
                                                        } else {
                                                            alert('商品已售完！')
                                                        }
                                                    }}>

                                                        {
                                                            data.img_url ? <img src={data.img_url} alt={data.img_url} key={data.img_url} /> : null
                                                        }
                                                        {
                                                            data.product_name ? <p key={data.product_name}> {data.product_name}</p> : null
                                                        }

                                                    </div>
                                                }) : null
                                            }
                                        </div>
                                    })
                                }
                            </div>
                        }) : null
                    }
                </div>
            </div>
        )
    }

    componentWillMount() {
        this.setState({
            CateIndex: this.props.list,

        }, () => {
            var a = []
            this.state.CateIndex.forEach((el) => {
                a.push(el.category_list)
            })
            this.setState({
                list: a
            }, () => {
                // console.log(this.state.list)
            })
        })


    }


    toTop() {
        var a = document.querySelectorAll('h4')
        var b = document.querySelector('.lzc')

        if (this.props.listName) {
            a.forEach((el) => {

                if (this.props.listName.innerHTML === el.innerHTML) {
                    b.scrollTop = el.offsetTop
                }
            })

        }
    }

    componentWillUnmount() {
        this.toTop = null
    }
    componentDidUpdate() {
        this.toTop()

    }

}


export default CateIndex
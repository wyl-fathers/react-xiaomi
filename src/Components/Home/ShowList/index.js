import React, { Component } from 'react'
import css from './index.module.scss'

class ShowList extends Component {
    state = {
        showList: false,
        tran: true
    }
    render() {
        return (
            <div className={css.ShowList + ' ' + this.props.isFixed + '1'} onClick={() => {
                this.setState({
                    showList: !this.state.showList,
                    tran: !this.state.tran
                }, () => { this.props.myshowlist(this.state.showList) })

            }}>

                {
                    this.state.tran ? <span className='iconfont' > &#xe66a;  </span> : <span className='iconfont' >&#xe694; </span>
                }

            </div>
        )
    }
}

export default ShowList
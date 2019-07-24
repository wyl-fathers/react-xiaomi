import React, { Component } from 'react'
import css from './index.module.scss'

class ShowList extends Component {
    state = {
        showList: false
    }
    render() {
        return (
            <div className={css.ShowList} onClick={() => {
                this.setState({
                    showList: !this.state.showList
                }, () => { this.props.myshowlist(this.state.showList) })

            }}>
                <span className='iconfont' >&#xe66a;</span>
            </div>
        )
    }
}

export default ShowList
import React, { Component } from 'react'
import { withRouter } from 'react-router'


class Search extends Component {
    render() {
        return (
            <div style={{ height: '0.5rem' }} onClick={() => {
                this.props.history.push('/ss')
            }}>
                <span className='iconfont' style={{ fontSize: '0.3rem' }}>
                    &#xe66f;
                </span>
            </div>
        )
    }
}

export default withRouter(Search)

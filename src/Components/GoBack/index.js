import React, { Component } from 'react'
// import { withRouter } from 'react-router'


class GoBack extends Component {
    render() {
        return (
            <div style={{ height: '0.5rem' }} onClick={() => {
                // console.log(this.props.history)
                this.props.history.goBack()
            }}>
                <span className='iconfont' style={{ fontSize: '0.3rem' }}>
                    &#xe66d;
                </span>
            </div>
        )
    }
}

// export default withRouter(GoBack)
export default GoBack

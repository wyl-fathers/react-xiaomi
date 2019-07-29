import React, { Component } from 'react'


function ScrollView(Comp) {
    return class ScrollView extends Component {

        state = {
            fixed: false
        }

        render() {
            return (
                <div>
                    <Comp isFixed={this.state.fixed}  {...this.props}></Comp>
                </div>
            )
        }
        componentDidMount() {
            window.onscroll = () => {

                if (document.documentElement.scrollTop >= 73.75) {
                    this.setState({
                        fixed: true
                    })
                } else {
                    this.setState({
                        fixed: false
                    })
                }
            }
        }

        componentWillUnmount() {
            window.onscroll = null
        }

    }
}




export default ScrollView
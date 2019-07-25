import React, { Component } from 'react'

import ReactSwipe from 'react-swipe';
import css from './index.module.scss'

class Carousel extends Component {

    render() {
        // console.log(this.props)

        let reactSwipeEl;
        return (
            < div className={css.swiper}>
                {
                    this.props.swiperList.length ? <ReactSwipe
                        className="carousel"
                        swipeOptions={{
                            continuous: true,
                            auto: 1500,
                            stopPropagation: true
                        }}
                        ref={el => (reactSwipeEl = el)}
                    >
                        {
                            this.props.swiperList.map((item) => {
                                return <div key={item.ad_position_id}>
                                    <img src={item.img_url} alt={item.ad_position_id} />
                                </div>
                            })
                        }
                    </ReactSwipe> : null
                }
            </div >
        );

    }

}

export default Carousel
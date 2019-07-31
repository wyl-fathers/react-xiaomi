import React, { Component } from 'react'
// import { ListIndex, F7ListIndex } from 'framework7-react'
import ListHead from '../../Components/ListHead'
import axios from 'axios'
import CateList from './CateList'
import CateLIndex from './CateIndex'

class Category extends Component {
    state = {
        categoryList: null,
        categoryIndex: null,
        data1: null
    }
    render() {
        return (
            <div>
                <ListHead {...this.props} >
                    分类
                </ListHead>



                {
                    this.state.categoryList ? <CateList list={this.state.categoryList} myevent={(data) => {
                        this.setState({
                            data1: data
                        })
                    }}></CateList> : null
                }

                {
                    this.state.categoryIndex ? <CateLIndex list={this.state.categoryIndex} listName={this.state.data1} {...this.props} ></CateLIndex> : null
                }


            </div>
        )
    }
    componentWillMount() {
        axios({
            method: 'post',
            url: '/v1/home/category_v2',
            data: "client_id=180100031051&channel_id=0&webp=1"
        }).then((resp) => {
            var list = []
            for (var i in resp.data.data) {
                list.push(resp.data.data[i].category_name)
            }
            this.setState({
                categoryList: list,
                categoryIndex: resp.data.data
            })
        })
    }

}

export default Category
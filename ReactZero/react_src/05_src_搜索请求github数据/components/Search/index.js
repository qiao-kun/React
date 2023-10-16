import React, { Component } from 'react'
import axios from 'axios';
export default class Search extends Component {


    handleSearch = () => {
        //获取用户名信息
        // const { value } = this.keyWordElement//常规解构赋值
        // console.log(this.keyWordElement.value)

        const { keyWordElement: { value } } = this//解构赋值连续写法
        // console.log(value);
        //发送网络请求
        axios.get(`https://api.github.com/search/users?q=${value}`).then(res => {
            // console.log(res.data.items, '成功了');
            this.props.getUserData(res.data.items)
        }, (error) => {
            console.log(error, '失败了');
        })
    }


    render() {
        return (
            <div className='search'>
                <input type="text" ref={e => this.keyWordElement = e} /><button onClick={this.handleSearch}>搜索</button>
            </div>
        )
    }
}

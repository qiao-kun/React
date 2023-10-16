import React, { Component } from 'react'
import PubSub from 'pubsub-js'
import axios from 'axios';
export default class Search extends Component {
    state = {//初始化状态
        userData: [], //userData初始值为数组
        isFirst: true,//是否第一次打开网页
        isLoading: false,//标识是否加载中
        err: '',//储存请求相关的信息
    }
    handleSearch = async () => {
        const { keyWordElement: { value } } = this
        if (!value) {
            alert('您输入的字符为空请您输入有效内容')
            return
        }
        //#region  //使用axios发送网络请求
        // axios.get(`https://api.github.com/search/users?q=${value ? value : ''}`).then(res => {
        //     PubSub.publish('atguigu', { isLoading: false, userData: res.data.items });
        // }, (error) => {
        //     PubSub.publish('atguigu', { err: error.message, userData: [] });
        // })
        //#endregion

        //#region  闭包发送请求
        // (async () => {
        //     const respone = await fetch(`https://api.github.com/search/users?q=${value ? value : ''}`)
        //     const data = await respone.json()
        //     console.log(data);
        // })()
        //#endregion

        //#region  //使用Fetch发送网络请求 未优化
        // fetch(`https://api.github.com/search/users?q=${value ? value : ''}`).then(
        //     response => {
        //         console.log('成功', response.json());
        //         return response.json()
        //     }
        //     , error => {
        //         console.log('失败', error);
        //         return new Promise(() => { })
        //     }
        // ).then(res => {
        //     console.log(res, '获取数据成功了');
        // }, error => {
        //     console.log(error.message, '获取数据失败了');
        // }).catch(err => {//同意错误处理
        //     console.log('请求错误', err, 'catch');
        // })
        //#endregion

        //#region    //使用Fetch发送网络请求 优化
        try {
            const response = await fetch(`https://api.github.com/search/users?q=${value ? value : ''}`);
            const data = await response.json()
            console.log(data);
            PubSub.publish('atguigu', { isLoading: false, userData: data.items })
        } catch (error) {
            PubSub.publish('atguigu', { err: error.message, userData: [] });
        }
        //#endregion
    }

    render() {
        return (
            <div className='search'>
                <input type="text" ref={e => this.keyWordElement = e} /><button onClick={this.handleSearch}>搜索</button>
            </div>
        )
    }
}

import React, { Component } from 'react'
import Child from './Child'
export default class Parent extends Component {

    state = {
        hasError: ""//用于标识子组件是否产生错误
    }
    //当Parent组件发生报错的时候,会触发getDerivedStateFromError调用,并携带错误信息
    static getDerivedStateFromError(error) {
        console.log('error', error);
        return { hasError: error }
    }
    componentDidCatch(error, info) {
        console.log(error,'error', info);
        console.log('统计错误次数,反馈给服务器,用于通知编码人员进行BUG的解决');
    }
    render() {
        return (
            <div>
                <h2>我是Parent组件</h2>
                {this.state.hasError ? <h2>有错误稍后再试</h2> : <Child />}
            </div>
        )
    }
}

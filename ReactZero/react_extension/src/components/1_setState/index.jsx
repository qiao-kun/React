import React, { Component } from 'react'

export default class Demo extends Component {

    state = { count: 0 }

    add = () => {
        //对象式的setState
        // //获取原来的count值
        // const { count } = this.state
        // //2.更新状态
        // this.setState({ count: count + 1 }, () => {
        //     console.log(this.state.count);
        // })
        //函数试的setState
        this.setState((state, props) => ({ count: state.count + 1 }), () => { console.log(this.state.count); })
    }
    render() {
        return (
            <div>
                <h1>当前求和为:{this.state.count}</h1>
                <button onClick={this.add}>点我+1</button>
            </div>
        )
    }
}

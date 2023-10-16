
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/actions/count'
import { connect } from 'react-redux'


import React, { Component } from 'react'
// 引入store，用于获取redux中保存状态
class Count extends Component {
    state = { count: 0, carName: "奔驰" }


    increment = () => {
        // 函数体加法
        const { value } = this.selectNumber
        this.props.jia(value * 1)
    }
    decrement = () => {
        // 函数体减法
        const { value } = this.selectNumber
        this.props.jian(value * 1)

    }
    incrementIfOdd = () => {
        // 函数体奇数再加
        const { value } = this.selectNumber
        if (this.props.count % 2 !== 0) {
            this.props.jia(value * 1)
        }
    }
    incrementAsync = () => {
        // 函数体
        const { value } = this.selectNumber
        this.props.jiaAsync(value * 1, 500)//异步调用多传一个time时间参数
    }
    render() {
        console.log('UI组件接收到的props是', this.props);
        return (
            <div>
                <h1>下方人数:{this.props.renshu}</h1>
                <h1>当前求和未:{this.props.count}</h1>
                <select ref={c => this.selectNumber = c} name="" id="">
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                </select>
                <button onClick={this.increment}>+</button>
                <button onClick={this.decrement}>-</button>
                <button onClick={this.incrementIfOdd}>当前为奇数再加</button>
                <button onClick={this.incrementAsync}>异步加</button>
            </div>
        )
    }
}


export default connect(
    (state) => ({ count: state.he, renshu: state.rens.length }),//映射状态 映射出来的状态将会被当作参数传递给UI组件
    {
        jia: createIncrementAction,//key值函数名字:value值是一个action对象
        jian: createDecrementAction,
        jiaAsync: createIncrementAsyncAction
    }

)(Count)

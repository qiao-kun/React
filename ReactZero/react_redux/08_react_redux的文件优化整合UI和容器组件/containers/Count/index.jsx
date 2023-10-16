
import {
    createIncrementAction,
    createDecrementAction,
    createIncrementAsyncAction
} from '../../redux/count_action'
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
    (state) => ({ count: state }),
    //mapDispatchToProps的一般写法
    //(
    //     dispatch) => (
    //     {
    //         jia: (number) => dispatch(createIncrementAction(number)),
    //         jian: (number) => dispatch(createDecrementAction(number)),
    //         jiaAsync: (number, time) => dispatch(createIncrementAsyncAction(number, time))
    //     }
    // )

    // mapDispatchToProps的精简写法 这是对象形式
    {
        jia: createIncrementAction,//key值函数名字:value值是一个action对象
        jian: createDecrementAction,
        jiaAsync: createIncrementAsyncAction
    }

)(Count)

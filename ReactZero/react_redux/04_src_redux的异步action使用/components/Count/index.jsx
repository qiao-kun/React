import React, { Component } from 'react'
// 引入store，用于获取redux中保存状态
import store from '../../redux/store'
import { createIncrementAction, createDecrementAction, createIncrementAsyncAction } from '../../redux/count_action'
export default class Count extends Component {
    state = { count: 0, carName: "奔驰" }

    // componentDidMount() {
    //     //检测redux中状态的变化，只要变化，就调用render
    //     store.subscribe(() => {
    //         //只要react里面的任何一个状态发生改变就会引起他的一个渲染render回调 即使是setState也会重新调用
    //         console.log('@');
    //         // this.render() 手动调不行
    //         this.setState({})
    //     })
    // }

    increment = () => {
        // 函数体加伐
        const { value } = this.selectNumber
        store.dispatch(createIncrementAction(value * 1))

    }
    decrement = () => {
        // 函数体减法
        const { value } = this.selectNumber
        store.dispatch(createDecrementAction(value * 1))
    }
    incrementIfOdd = () => {
        // 函数体

        const { value } = this.selectNumber

        if (store.getState() % 2 !== 0) {
            store.dispatch(createIncrementAsyncAction(value * 1, 500))
        }
    }
    incrementAsync = () => {
        // 函数体
        const { value } = this.selectNumber
        setTimeout(() => {
            store.dispatch({
                type: "increment", data: value * 1
            })
        }, 500);
    }
    render() {
        return (
            <div>
                <h1>当前求和未:{store.getState()}</h1>
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

import React, { Component } from 'react'

export default class Count extends Component {
    state = { count: 0 }

    increment = () => {
        // 函数体加伐
        const { value } = this.selectNumber
        const { count } = this.state
        this.setState({ count: count + value * 1 })

    }
    decrement = () => {
        // 函数体减法
        const { value } = this.selectNumber
        const { count } = this.state
        this.setState({ count: count - value * 1 })

    }
    incrementIfOdd = () => {
        // 函数体

        const { value } = this.selectNumber
        const { count } = this.state
        if (count % 2 !== 0) {
            this.setState({ count: count + value * 1 })
        }
    }
    incrementAsync = () => {
        // 函数体
        const { value } = this.selectNumber
        const { count } = this.state
        setTimeout(() => {
            this.setState({ count: count + value * 1 })
        }, 500);
    }
    render() {
        return (
            <div>
                <h1>当前求和未:{this.state.count}</h1>
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

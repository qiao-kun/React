// 1.创建"外壳"组件App
import React, { Component } from 'react'
import Hello from './components/Hello'
import Welcome from './components/Welcome'
class App extends Component {
    render() {
        return (
            <div>
                hello,react!
                <Hello></Hello>
                <Welcome></Welcome>
            </div>
        )
    }
}
//暴露App组件
export default App
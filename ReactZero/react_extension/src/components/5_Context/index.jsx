import React, { Component } from 'react'

//创建Context对象
const MyContext = React.createContext()
const { Provider, Consumer } = MyContext
export default class A extends Component {
    state = { username: "tom" }
    render() {
        const { username } = this.state
        return (
            <div className='parent'>
                <h3>我是A组件</h3>
                <h4>我的用户名是:{username}
                    <Provider value={username} >
                        <B ></B>
                    </Provider>
                </h4>
            </div>
        )
    }
}
class B extends Component {
    static contextType = MyContext

    render() {
        return (
            <div className='child'>
                <h3>我是B组件</h3>
                <h4>我A组件接收到的的用户名是:{this.context}</h4>
                <C ></C>
            </div>
        )
    }
}
class C extends Component {
    static contextType = MyContext

    render() {
        return (
            <div className='grand'>
                <h3>我是C组件</h3>
                <h4>我A组件接收到的的用户名是:{this.context}</h4>
                使用Consumer展示: <Consumer>
                    {
                        value => {
                            return `${value}`
                        }
                    }
                </Consumer>
            </div>
        )
    }
}

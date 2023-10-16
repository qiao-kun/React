import React, { Component, Fragment } from 'react'
import C from '../1_setState'
export default class Parent extends Component {
    render() {
        return (
            <div>
                <h3>我是Parent组件</h3>
                <A render={(name) => <B name={name} />}></A >
            </div >
        )
    }
}
class A extends Component {
    state = { name: "tom" }
    render() {
        const { name } = this.state
        return (
            <div>
                <h3>我是A组件</h3>
                {this.props.render(name)}
            </div>
        )
    }
}
class B extends Component {
    render() {
        return (
            <div>
                <h3>我是B组件:{this.props.name}</h3>
            </div>
        )
    }
}



import React, { Component } from 'react'

export default class Child extends Component {
    state = {
        user: [
            { id: "001", name: "tom", age: 18 },
            { id: "002", name: "tom2", age: 19 },
            { id: "003", name: "tom3", age: 20 }
        ]
    }
    render() {
        return (
            <div>
                <h2>我是Child组件</h2>
                {
                    this.state.user.map((item, index) => {
                        return <h4 key={item.id}>{item.name}---{item.name}</h4>
                    })
                }
            </div>
        )
    }
}

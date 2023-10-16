import React, { Component } from 'react'

export default class KeyUse extends Component {
    state = {
        person: [
            { id: "1", name: "cuisaihao", age: 18 },
            { id: "2", name: "lixinran", age: 18 },
        ]
    }
    add = () => {
        const { person } = this.state
        const wang = { id: "3", name: "wanghanying", age: 18 }
        this.setState({
            person: ([wang, ...person])
        })
    }

    render() {
        return (
            <div>
                <h2> 展示人员信息</h2>
                <button onClick={this.add}>添加一个</button>
                <ul>
                    {this.state.person.map((item, index) => {//用index和id作为key的区别
                        return <li key={index}>姓名:{item.name} 年龄:{item.age} <input type="text" /></li>
                    })}
                </ul>
            </div>
        )
    }
}

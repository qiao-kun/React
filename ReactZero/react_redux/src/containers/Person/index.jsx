import React, { Component } from 'react'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
import { addPerson } from '../../redux/actions/person'
class Person extends Component {
    addPerson = () => {
        const name = this.nameNode.value
        const age = this.ageNode.value
        const personObj = { id: nanoid(), name, age }
        this.props.addPerson(personObj)//同样是 映射addPerson
        this.nameNode.value = ''
        this.ageNode.value = ''
    }
    
    render() {
        return (
            <div>
                <h1>上方数字:{this.props.count}</h1>
                <input type="text" ref={c => this.nameNode = c} placeholder='请输入名字' />
                <input type="text" ref={c => this.ageNode = c} placeholder='请输入年龄' />
                <button onClick={this.addPerson}>添加</button>
                <ul>
                    {
                        this.props.persons.map((p) => {
                            return <li key={p.id}>{p.name}--{p.age}: </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default connect(
    state => ({ persons: state.persons, count: state.count })//映射状态(把#state.rens#仓库的状态值映射给renState给予页面使用)
    ,// state函数在此处返回了  { renState: state.rens } 对象
    {
        addPerson
    }
)(Person)





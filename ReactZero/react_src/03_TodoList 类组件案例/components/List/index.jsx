import React, { Component } from 'react'
import PropTypes from 'prop-types'//参数类型限制库
import './index.css'
import Item from '../Item'
export default class List extends Component {
    static propTypes = {
        //对接受的props进行:类型必要性的限制
        updataTodo: PropTypes.func.isRequired,
        deleteTodo: PropTypes.func.isRequired,
        clearAllDone: PropTypes.func.isRequired,
        todos: PropTypes.array.isRequired
    }
    render() {
        const { todos, updataTodo, deleteTodo, clearAllDone } = this.props

        return (
            <div className='todo_main'>
                {todos.map((item, index) => {
                    return <Item key={item.id} {...item} updataTodo={updataTodo} deleteTodo={deleteTodo} clearAllDone={clearAllDone}></Item>
                })}
            </div>
        )
    }
}

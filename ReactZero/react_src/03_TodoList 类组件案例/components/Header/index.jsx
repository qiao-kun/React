import React, { Component } from 'react'
import PropTypes from 'prop-types'//参数类型限制库
import { nanoid } from 'nanoid'//引入一个id库
import './index.css'
class Header extends Component {
    static propTypes = {
        //对接受的props进行:类型必要性的限制
        addTodo: PropTypes.func.isRequired
    }

    handleKeyUp = (event) => {
        if (event.keyCode !== 13) return
        if (event.target.value.trim() === '') { alert('输入不能为空'); return; }
        const todoObj = { id: nanoid(), name: event.target.value, done: false }
        this.props.addTodo(todoObj)
        event.target.value = ''
    }

    render() {
        return (
            <div className='todo_header'>
                <input type="text" onKeyUp={this.handleKeyUp} placeholder='请输入你的任务名称,按回车确认' />
            </div>
        )
    }
}
export default Header
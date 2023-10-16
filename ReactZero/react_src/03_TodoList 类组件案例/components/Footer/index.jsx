import React, { Component } from 'react'
import './index.css'
export default class Footer extends Component {
    //全选checkbox的回调
    handleCheckAll = (event) => {
        this.props.checkAllTodo(event.target.checked)
    }
    handleClearAllDone = () => {
        this.props.clearAllTodo()
    }
    render() {
        const { todos } = this.props

        const doneCount = todos.reduce((prev, current) => {
            return prev + (current.done ? 1 : 0)
        }, 0)

        const total = todos.length
        console.log('%%', doneCount)
        return (
            <div className='todo_footer'>
                <label htmlFor="">
                    <input type="checkbox" onChange={this.handleCheckAll} checked={doneCount === total && total !== 0 ? true : false} />
                </label>
                <span>已完成{doneCount}</span>全部{todos.length}
                <button className='btn btn_danger' onClick={this.handleClearAllDone}>清除已完成的任务</button>
            </div>
        )
    }
}

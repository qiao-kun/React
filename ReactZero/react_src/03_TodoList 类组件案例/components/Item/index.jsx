import React, { Component } from 'react'
import './index.css'
export default class Item extends Component {

    state = { mouse: false }
    //标识鼠标移入移出
    handleMouse = (flag) => {
        // console.log(flag, 'flag')
        return () => {
            this.setState({ mouse: flag })
            console.log(flag)
        }
    }
    //勾选取消勾选某一个todo事件的回调
    handleCheck = (id) => {
        return (event) => {
            console.log(event.target.checked)
            this.props.updataTodo(id, event.target.checked)
        }
    }
    //删除某一个todo事件的回调
    handleDelete = (id) => {
        console.log('获取id', id);
        if (window.confirm('您确定要删除该任务么?')) {
        this.props.deleteTodo(id)
        }
    }
    render() {
        const { id, name, done } = this.props
        const { mouse } = this.state
        return (
            <li style={{ background: mouse ? '#ddd' : '000', display: 'flex' }} onMouseEnter={this.handleMouse(true)} onMouseLeave={this.handleMouse(false)}>
                <label htmlFor="">
                    <input type="checkbox" checked={done} onChange={this.handleCheck(id)} />
                    <span>{name}</span>
                </label>
                <button className='btn btn_danger'
                    onClick={() => this.handleDelete(id)}
                    style={{ display: mouse ? "block" : "none", right: 0, position: 'absolute', background: "red", color: "#999" }}>删除</button>
            </li>
        )
    }
}

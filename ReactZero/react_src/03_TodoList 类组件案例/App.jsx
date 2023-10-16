// 1.创建"外壳"组件App
import React, { Component } from 'react'
import Header from './components/Header'
import List from './components/List'
import Footer from './components/Footer'
class App extends Component {
    // 状态在哪里,操作状态的方法就在那里
    state = {
        todos: [
            { id: "001", name: "吃饭", done: true }
            , { id: "002", name: "睡觉", done: true }
            , { id: "003", name: "敲代码", done: false }
        ]
    }
    addTodo = (todoObj) => {
        const { todos } = this.state
        let newTodos = [todoObj, ...todos]
        this.setState({ todos: newTodos })
    }
    //用于更新一个todo对象
    updataTodo = (id, done) => {
        //获取状态中的todos
        const { todos } = this.state
        //匹配处理数据
        const newTodos = todos.map((item, index) => {
            if (item.id === id) return { ...item, done }
            else {
                return item
            }
        })
        this.setState({ todos: newTodos })
    }
    //用于删除一个todo对象
    deleteTodo = (id) => {
        const { todos } = this.state
        const newTodos = todos.filter((item) => {
            return item.id !== id
        })
        this.setState({ todos: newTodos })
        console.log(todos, 'todos')
    }
    //CheckAll用于全选
    checkAllTodo = (flag) => {
        console.log(flag);
        //获取原来的todos
        const { todos } = this.state
        const newTodos = todos.map((item) => {
            return { ...item, done: flag }
        })
        this.setState({ todos: newTodos })
    }
    //handleClearAllDone用于清除已完成的done
    clearAllTodo = () => {
        const { todos } = this.state
        //过滤数据
        const newTodos = todos.filter((item) => {
            return !item.done
        })
        this.setState({ todos: newTodos })
    }
    render() {
        const { todos } = this.state
        return (
            <div className='todo_container'>
                <div className='todo_wrap'>
                    <Header addTodo={this.addTodo}></Header>
                    <List todos={todos} updataTodo={this.updataTodo} deleteTodo={this.deleteTodo}></List>
                    <Footer todos={todos} checkAllTodo={this.checkAllTodo} clearAllTodo={this.clearAllTodo}></Footer>
                </div>
            </div>
        )
    }
}
//暴露App组件
export default App
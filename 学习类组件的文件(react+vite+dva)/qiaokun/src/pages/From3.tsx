import React, { Component } from 'react'

interface State {
    username: HTMLInputElement | null | string
    password: HTMLInputElement | null | string
}
class From3 extends React.Component<State> {
    //使用高阶函数写表单

    state: State = {
        username: "",//用户名
        password: ""//密码
    }
    //保存数据到表单中
    saveFromData = (dataType: any): any => {
        console.log(dataType)
        return ((event: any) => {
            console.log([dataType], event.target.value, 'event')
        })
    }
    handleSubmit = (event: any) => {
        event.preventDefault()//阻止表单提交
    }
    render() {
        return (
            // action = "指点的网址"
            <form method="get" onSubmit={this.handleSubmit}>
                账号:<input onChange={this.saveFromData('username')} type="text" name="username" />
                密码:<input onChange={this.saveFromData('password')} type="password" name='password' />
                <button >提交</button>
            </form>
        )
    }
}

export default From3
import React, { Component } from 'react'

interface State {
    username: HTMLInputElement | null | string
    password: HTMLInputElement | null | string
}
class From2 extends React.Component<State> {
    //受控组件随着表单变化数据变化
    //优势更适合 减少ref

    state: State = {
        username: "",//用户名
        password: ""//密码
    }
    saveUsername = (event: any) => {
        console.log(event.target.value, 'event')
        this.setState({ username: event.target.value })
    }
    savePassword = (event: any) => {
        console.log(event.target.value, 'event')
        this.setState({ password: event.target.value })
    }
    handleSubmit = (event: any) => {

        event.preventDefault()//阻止表单提交
        const { username, password } = this.state
        alert(username)
    }
    render() {
        return (
            // action = "指点的网址"
            <form method="get" onSubmit={this.handleSubmit}>
                账号:<input onChange={this.saveUsername} type="text" name="username" />
                密码:<input onChange={this.savePassword} type="password" name='password' />
                <button >提交</button>
            </form>
        )
    }
}

export default From2
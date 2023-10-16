
import React, { Component } from 'react'

interface State {
    username: HTMLInputElement | null | string
    password: HTMLInputElement | null | string
}
class From4 extends React.Component<State> {
    //不使用高阶函数写表单

    state: State = {
        username: "",//用户名
        password: ""//密码
    }
    //保存数据到表单中
    saveFromData = (dataType: any, event: React.ChangeEvent<HTMLElement>): any => {
        console.log(dataType, (event.target as HTMLInputElement).value, '查看返回值')
        this.setState({ [dataType]: (event.target as HTMLInputElement).value })
    }

    handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
        event.preventDefault()//阻止表单提交

    }
    

    render() {
        return (
            // action = "指点的网址"
            <form method="get" onSubmit={this.handleSubmit}>
                账号:<input onChange={(event) => { this.saveFromData('username', event) }} type="text" name="username" />
                密码:<input onChange={(event) => { this.saveFromData('password', event) }} type="password" name='password' />
                <button >提交</button>
            </form>
        )
    }
}

export default From4
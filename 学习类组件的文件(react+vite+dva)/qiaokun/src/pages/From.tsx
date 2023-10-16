import React, { Component } from 'react'

class From extends React.Component {
    // 非受控组件 现取现用

    handleSubmit = (event: any) => {
        event.preventDefault()//阻止表单提交
        const { username, password } = this
        alert(username?.value)
    }
    username: HTMLInputElement | null = null
    password: HTMLInputElement | null = null
    render() {
        return (
            // action = "指点的网址"
            <form method="get" onSubmit={this.handleSubmit}>

                账号:<input ref={c => this.username = c} type="text" name="username" />
                密码:<input ref={c => this.password = c} type="password" name='password' />
                <button >提交</button>
            </form>
        )
    }
}

export default From
import React, { Component } from 'react'
import Detail from './Detail'
import { Link, Route } from 'react-router-dom'
export default class Message extends Component {
  state = {
    messageArr: [
      { id: "01", title: "消息1" },
      { id: "02", title: "消息2" },
      { id: "03", title: "消息3" }
    ]
  }
  render() {
    const { messageArr } = this.state
    return (
      <div>
        我是Message
        <ul>
          {messageArr.map((item, index) => {
            return <li key={item.id}>
              {/* 向路由组件传递state参数 */}
              <Link to={{ pathname: "/home/message/detail", state: { id: item.id, title: item.title } }}>{item.title}</Link>
            </li>
          })}
        </ul>
        <hr />
        {/*state无需声明接收 正常注册路由即可*/}
        <Route replace path="/home/message/detail" component={Detail}></Route>
      </div >
    )
  }
}

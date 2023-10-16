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
  replaceShow = (id, title) => {
    console.log(id, title);
    //replace跳转+携带params参数
    //编写一段代码，让其实现跳转到Detail组件，且为replace跳转、
    this.props.history.replace(`/home/message/detail/${id}/${title}`)
    //replace跳转+携带search参数
    this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
    //replace跳转+携带state参数
    this.props.history.push(`/home/message/detail`, { id, title })
  }
  pushShow = (id, title) => {
    console.log(id, title);
    //push跳转+携带params参数
    //编写一段代码，让其实现跳转到Detail组件，且为replace跳转、
    this.props.history.push(`/home/message/detail/${id}/${title}`)
    //push跳转+携带search参数
    this.props.history.push(`/home/message/detail?id=${id}&title=${title}`)
    //replace跳转+携带state参数
    this.props.history.push(`/home/message/detail`, { id, title })
  }
  render() {
    const { messageArr } = this.state
    return (
      <div>
        我是Message
        <ul>
          {messageArr.map((item, index) => {
            return <li key={item.id}>
              {/*  params传参*/}
              <Link to={`/home/message/detail/${item.id}/${item.title}`}>{item.title}</Link>
              {/*  search传参*/}
              <Link to={`/home/message/detail`}>{item.title}</Link>
              {/* 向路由组件传递state参数 */}
              <Link to={{ pathname: "/home/message/detail", state: { id: item.id, title: item.title } }}>{item.title}</Link>
              <button onClick={() => { this.pushShow(item.id, item.title) }} >Push查看</button>
              <button onClick={() => { this.replaceShow(item.id, item.title) }}>replace查看</button>
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

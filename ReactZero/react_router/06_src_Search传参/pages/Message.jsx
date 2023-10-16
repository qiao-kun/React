import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Message() {
    const [message] = useState([
        { id: '@01', title: '消息1', context: '锄禾日当午' },
        { id: '@02', title: '消息2', context: '锄禾日当午' },
        { id: '@03', title: '消息3', context: '锄禾日当午' },
        { id: '@04', title: '消息4', context: '锄禾日当午' },
    ])
    return (
        <div>
            <Outlet></Outlet>
            <hr />
            <ul>
                {message.map((item, index) => {
                    return <li key={item.id}>
                        {/* search传参不需要改变被注册的路由的路径 */}
                        <Link to={`detail?id=${item.id}&title=${item.title}&context=${item.context} `}>{item.title}</Link>
                    </li>
                })}
            </ul>
        </div >
    )
}

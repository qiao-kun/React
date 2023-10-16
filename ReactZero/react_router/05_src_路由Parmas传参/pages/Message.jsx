import React, { useState } from 'react'
import { Link, Outlet } from 'react-router-dom'
export default function Message() {
    const [message] = useState([
        { id: '@01', title: '消息1', content: '锄禾日当午' },
        { id: '@02', title: '消息2', content: '锄禾日当午' },
        { id: '@03', title: '消息3', content: '锄禾日当午' },
        { id: '@04', title: '消息4', content: '锄禾日当午' },
    ])
    return (
        <div>

            <Outlet></Outlet>
            <hr />
            <ul>
                {message.map((item, index) => {
                    return <li key={item.id}>
                        <Link to={`detail/${item.id}/${item.title}/${item.content}`}> {item.title}</Link>
                    </li>
                })}
            </ul>
        </div>
    )
}

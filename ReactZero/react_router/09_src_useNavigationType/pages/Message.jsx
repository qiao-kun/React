import React, { useState } from 'react'
import { Link, Outlet, useNavigate } from 'react-router-dom'
export default function Message() {
    const [message] = useState([
        { id: '@01', title: '消息1', content: '锄禾日当午' },
        { id: '@02', title: '消息2', content: '锄禾日当午' },
        { id: '@03', title: '消息3', content: '锄禾日当午' },
        { id: '@04', title: '消息4', content: '锄禾日当午' },
    ])
    const nav = useNavigate()
    

    function showDeatil(item) {
        console.log('666');
        nav('detail', {
            replace: false,
            state: {
                id: item.id,
                title: item.title,
                content: item.content,
            }
        })
    }
    return (
        <div>
            <Outlet></Outlet>
            <hr />
            <ul>
                {message.map((item, index) => {
                    return <li key={item.id}>
                        {/* search传参不需要改变被注册的路由的路径 */}
                        <Link to={'detail'} state={{ id: item.id, title: item.title, content: item.content, }}>{item.title}</Link>
                        <button onClick={() => showDeatil(item)}>查看详情</button>
                    </li>
                })}
            </ul>
        </div >
    )
}

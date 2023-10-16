import React from 'react'
import { useLocation, useSearchParams } from 'react-router-dom'

export default function Detail() {
    const urlDate = useLocation()
    console.log(urlDate);
    const [search, setSearch] = useSearchParams()
    const id = search.get('id')
    const context = search.get('context')
    const title = search.get('title')

    return (<ul>
        <li>
            <button onClick={() => setSearch('id=@066&title=消息66&context=汗滴禾下土')}>点我更新一下接收到的search参数</button>
        </li>
        <li>id:{id}</li>
        <li>标题:{context}</li>
        <li>内容:{title}</li>
    </ul>)

}
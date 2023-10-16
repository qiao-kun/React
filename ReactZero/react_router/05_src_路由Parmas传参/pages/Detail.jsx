import React from 'react'
import { useMatch, useParams } from 'react-router-dom'
export default function Detail() {
    const { id, title, context } = useParams()
    const x = useMatch('/home/message/detail/:id/:title/:context')
    console.log(x);
    return (<ul>
        <li>id:{id}</li>
        <li>标题:{title}</li>
        <li>内容:{context}</li>
    </ul>)

}
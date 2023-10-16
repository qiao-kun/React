import React from 'react'
import { useLocation, useMatch, useSearchParams } from 'react-router-dom'

export default function Detail() {
    const { state: { id, title, content } } = useLocation()

    return (<ul>
        <li>
        </li>
        <li>id:{id}</li>
        <li>标题:{content}</li>
        <li>内容:{title}</li>
    </ul>)

}
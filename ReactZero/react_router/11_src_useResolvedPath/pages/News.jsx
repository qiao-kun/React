import React from 'react'
import { useNavigationType } from 'react-router-dom'
export default function News() {
    console.log(useNavigationType());//查看当前路由的路径跳转类型 POP PUSH REPLACE
    return (
        <div>News</div>
    )
}

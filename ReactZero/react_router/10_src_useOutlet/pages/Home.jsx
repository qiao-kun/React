import React from 'react'
import { NavLink, Outlet, useOutlet } from 'react-router-dom'

export default function Home() {
    console.log("###", useOutlet());
    return (
        <div>
            Home
            <NavLink to={'/home/news'} >News</NavLink>
            <NavLink to={'/home/message'} >Message</NavLink>
            <hr />
            <NavLink to={'./news'} >News</NavLink>
            <NavLink to={'./message'} >Message</NavLink>
            <hr />
            <NavLink to={'news'} >News</NavLink>
            <NavLink to={'message'} >Message</NavLink>
            {/* 指定路由呈现的位置 */}
            <Outlet></Outlet>
        </div>
    )
}

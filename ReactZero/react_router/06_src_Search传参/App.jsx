import React from 'react'
import { NavLink, useRoutes, Outlet } from 'react-router-dom'
import routes from './routes'
export default function App() {
  //根据路由表生成对应的规则
  const element = useRoutes(routes)
  return (
    <div>
      <NavLink end className={({ isActive }) => { return isActive ? 'on' : '' }} to={'/home'}>主页</NavLink>
      <NavLink to={'/about'}>关于</NavLink>
      {element}
      <Outlet></Outlet>
    </div >
  )
}

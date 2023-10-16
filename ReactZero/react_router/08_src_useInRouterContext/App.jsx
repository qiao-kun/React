import React from 'react'
import { NavLink, useRoutes, Outlet, useInRouterContext } from 'react-router-dom'
import routes from './routes'
import Header from './components/Header'
export default function App() {
  //根据路由表生成对应的规则
  console.log('@', useInRouterContext());
  const element = useRoutes(routes)
  // 只要处于BrowserRouter包裹之中那么就会拥有路由的Api
  console.log(element);
  return (
    <div>
      <Header></Header>
      <NavLink end className={({ isActive }) => { return isActive ? 'on' : '' }} to={'/home'}>主页</NavLink>
      <NavLink to={'/about'}>关于</NavLink>
      {element}
      <Outlet></Outlet>
    </div >
  )
}

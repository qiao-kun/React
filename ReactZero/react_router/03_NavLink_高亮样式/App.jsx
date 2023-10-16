import React from 'react'
import { NavLink, Routes, Route, Navigate } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
export default function App() {
  function computedClassname({ isActive }) {
    return isActive ? 'on' : ''
  }
  return (
    <div>
      <NavLink className={computedClassname} to={'/home'}>主页</NavLink>
      <NavLink to={'/about'}>关于</NavLink>

      <Routes>
        <Route path='/about' element={<About />}></Route>{/* 在6版本的路由里面 components属性改成了element属性需要自己引入元素标签不是名称 */}
        <Route path='/home' element={<Home />}></Route>
        <Route path='/' element={<Navigate to={'/about'} />}></Route>
      </Routes>
    </div >
  )
}

import React from 'react'
import { NavLink, Routes, Route } from 'react-router-dom'
import About from './pages/About'
import Home from './pages/Home'
export default function App() {
  return (
    <div>
      <NavLink to={'/home'}>主页面</NavLink>
      <NavLink to={'/about'}>关于</NavLink>

      <Routes>
        <Route path='/about' element={<About />}></Route>{/* 在6版本的路由里面 components属性改成了element属性需要自己引入元素标签不是名称 */}
        <Route path='/home' element={<Home />}></Route>
      </Routes>
    </div >
  )
}

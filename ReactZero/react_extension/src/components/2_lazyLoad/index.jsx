
import React, { Component, lazy, Suspense } from 'react'
import { NavLink, Route, Routes } from 'react-router-dom'
import LazyUi from '../1_setState'//懒加载 响应中 组件展示 普通要引入即可
const Home = lazy(() => import('./home'))
const About = lazy(() => import('./about'))
export default class Lazy extends Component {
    state = { userData: [] }
    render() {
        return (
            <div>
                <div className='wrap'>
                    <NavLink to="/about">About</NavLink>
                    <p></p>
                    <NavLink to="/home">Home</NavLink>
                </div>
                <div>
                    {/* 注册路由 */}
                    <Suspense fallback={<LazyUi />}>
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path='/about' element={<About />} />
                            <Route path='/home' element={<Home />} />
                        </Routes>
                    </Suspense>
                </div>
            </div>
        )
    }
}


import React, { Component } from 'react'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

export default class App extends Component {
    state = { userData: [] }
    render() {
        return (
            <div>
                <div className='wrap'>

                    <NavLink activeClassName="aaa" to="/about">About</NavLink>
                    <p></p>
                    <NavLink to="/home">Home</NavLink>

                </div>
                <div>
                    {/* 注册路由 */}
                    <Route path='/about' component={About} />
                    <Route path='/home' component={Home} />
                </div>
            </div>
        )
    }
}

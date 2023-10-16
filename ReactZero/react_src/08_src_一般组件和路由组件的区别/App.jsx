
import React, { Component } from 'react'
import { Link, BrowserRouter, Route } from 'react-router-dom'
import Home from './components/Home'
import About from './components/About'

export default class App extends Component {
    state = { userData: [] }
    render() {
        return (
            <div>
                <div className='wrap'>

                    <Link to="/about">About</Link>
                    <p></p>
                    <Link to="/home">Home</Link>

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


import React, { Component } from 'react'
import { BrowserRouter, NavLink, Route, Switch, Redirect } from 'react-router-dom'
import MyNavLink from './components/MyNavLink'
import About from './pages/About'
import Home from './pages/Home'
export default class App extends Component {
    state = { userData: [] }
    render() {
        this.name = ['222', '111']
        return (
            <div>
                <div className='wrap'>
                    <NavLink activeClassName="aaa" to="/about">About</NavLink>
                    {/* <p></p> */}
                    <NavLink to="/home">Home</NavLink>
                    {this.name.map((item, index) => {
                        return <MyNavLink key={item} to={item}></MyNavLink>
                    })}
                </div>
                <div>
                    {/* 注册路由 */}
                    <Route path='/about' component={About} />
                    <Route path='/home' component={Home} />
                    <Route redirect='/about' path='/about' />
                </div>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { BrowserRouter, NavLink, Redirect, Route, Switch } from 'react-router-dom'
import News from './News'
import Message from './Message'
import MyNavLink from '../../components/MyNavLink'
export default class Home extends Component {
    render() {
        return (
            <div>
                <h3>我是home内容</h3>
                <div>
                    <ul className=''>
                        <li>
                            <MyNavLink to="/home/message" children={'Message'} component={Message}>Message</MyNavLink>
                        </li>
                        <li>
                            <MyNavLink to="/home/news" children={'News'} component={News}>News</MyNavLink>
                        </li>
                    </ul>
                </div>
                <Switch>
                    <Route path='/home/news' component={News}  ></Route>
                    <Route path='/home/message' component={Message}  ></Route>
                    <Redirect to="/home/news"></Redirect>
                </Switch>
            </div>
        )
    }
}

import React, { Component } from 'react'
import { BrowserRouter, NavLink, Route } from 'react-router-dom'

export default class MyNavLink extends Component {
    render() {
        return (
            <div>
                <NavLink activeClassName="aaa" to={this.props.to} children={this.props.children}> {this.props.children}</NavLink>
            </div>
        )
    }
}

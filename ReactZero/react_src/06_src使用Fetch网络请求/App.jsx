import React, { Component } from 'react'
import Search from './components/Search';
import List from './components/List';
export default class App extends Component {
    state = { userData: [] }
    render() {
        return (
            <div className='wrap'>
                <Search />
                <List />
            </div>
        )
    }
}

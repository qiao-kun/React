import React, { Component } from 'react'
import Search from './components/Search';
import List from './components/List';
export default class App extends Component {
    state = { userData: [] }

    getUserData = (items) => {
        this.setState({ userData: [...items] })
    }

    render() {
        return (
            <div className='wrap'>
                <Search getUserData={this.getUserData} />
                <List userData={this.state.userData} />
            </div>
        )
    }
}

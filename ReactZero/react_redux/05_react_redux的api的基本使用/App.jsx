import React, { Component } from 'react'
import Count from './containers/Count'
import store from './redux/store'
export default class App extends Component {
  render() {

    return (
      <div>
        App
        <Count store={store}></Count>
      </div>
    )
  }
}


import React, { Component, Fragment } from 'react'
import SetDemo from './components/1_setState'
import Lazy from './components/2_lazyLoad'
import Demo from './components/3_hooks'
import Frag from './components/4_Fragment'
import Context from './components/5_Context'
import Optimize from './components/6_optimize'
import RenderProps from './components/7_renderProps'
import ErrorBoundary from './components/8_ErrorBoundary/Parent'
export default class App extends Component {
  render() {
    return (
      <Fragment>

        {/* <SetDemo></SetDemo>
        <hr />
        <Lazy></Lazy>
        <hr />
        <Demo></Demo>
        <hr />
        <Frag></Frag>
        <hr /> */}
        {/* <Context></Context> */}
        {/* <hr /> */}
        {/* <Optimize></Optimize> */}
        {/* <hr /> */}
        {/* <RenderProps></RenderProps> */}
        {/* <hr /> */}
        <ErrorBoundary></ErrorBoundary>
      </Fragment>
    )
  }
}

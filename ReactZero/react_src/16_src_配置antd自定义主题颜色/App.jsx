import React, { Component } from 'react'
import './App.less'

import { Button } from 'antd';
// import 'antd/dist/antd.css'
export default class App extends Component {
    render() {
        return (
            <div>
                app
                <Button type="primary">Primary Button</Button>
            </div>
        )
    }
}

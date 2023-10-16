import React, { Component } from 'react'
import axios from 'axios';
export default class App extends Component {
    getStudentDate = () => {
        axios.get('http://localhost:3000/api1/students').then(
            response => { console.log('成功啦', response.data); }, error => {
                console.log('错误拉', error);
            })
    }
    render() {
        return (
            <div>
                1111111
                <button onClick={this.getStudentDate}>请求</button>
            </div>
        )
    }
}

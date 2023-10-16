import React, { Component } from 'react'
import PubSub from 'pubsub-js'
export default class List extends Component {
    state = {//初始化状态
        userData: [], //userData初始值为数组
    }
    componentDidMount() {
        this.token = PubSub.subscribe('atguigu', (_, data) => {
            this.setState({ userData: data.userData })
        });
    }
    componentWillUnmount() {
        console.log('卸载token');
        PubSub.unsubscribe(this.token)
    }
    render() {
        const { userData } = this.state
        return (
            <div className='row'>
                {userData.map((item, index) => {
                    return <div className='card' key={item.id}>
                        <a href={item.html_url} rel='noreferrer' target='_blank'>
                            <img src={item.avatar_url} alt="head_portrait" />
                        </a>
                        <p className='card-text'>{item.login}</p>
                    </div>
                })}

            </div>
        )
    }
}

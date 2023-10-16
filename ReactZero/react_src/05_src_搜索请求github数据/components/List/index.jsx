import React, { Component } from 'react'

export default class List extends Component {
    render() {
        const { userData } = this.props
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

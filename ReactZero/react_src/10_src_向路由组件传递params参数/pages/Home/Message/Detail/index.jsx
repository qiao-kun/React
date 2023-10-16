import React, { Component } from 'react'

const DetailData = [
    { id: "01", context: "你好中国1", },
    { id: "02", context: "你好中国2", },
    { id: "03", context: "你好中国3", }
]
export default class Detail extends Component {
    render() {
        const { id, title } = this.props.match.params

        const findRequest = DetailData.find((item, index) => {
            return item.id === id
        })
        return (
            <div>
                <ul>
                    <li>ID{id}</li>
                    <li>TITLE???{title}</li>
                    <li>CONTEXT{findRequest?.context}</li>
                </ul>
            </div >
        )
    }
}

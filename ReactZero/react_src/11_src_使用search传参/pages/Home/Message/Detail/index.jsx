import React, { Component } from 'react'
import qs from 'querystring-es3'
const DetailData = [
    { id: "01", context: "你好中国1", },
    { id: "02", context: "你好中国2", },
    { id: "03", context: "你好中国3", }
]
export default class Detail extends Component {
    render() {
        //接收search参数
        const { search } = this.props.location
        console.log(search);
        // console.log(qs.parse(search), 'search');
        const { id, title } = qs.parse(search.slice(1))
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

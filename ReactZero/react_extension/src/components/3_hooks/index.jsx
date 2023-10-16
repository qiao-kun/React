import React, { Component } from 'react'
import { root } from '../..';
// class Demo extends Component {

//     state = { count: 0 }
//     myRef = React.createRef()
//     add = () => {
//         this.setState(state => ({ count: state.count + 1 }))
//     }
//     show = () => {
//         alert(this.myRef.current.value)
//     }
//     unmount = () => {
//         root.unmount();
//     }

//     componentWillUnmount() {
//         clearInterval(this.timer)
//         console.log('清除并且卸载了root组件');
//     }

//     componentDidMount() {
//         this.timer = setInterval(() => {
//             this.setState(state => ({ count: state.count + 1 }))
//         }, 1000)
//     }

//     render() {
//         return (
//             <div>
//                 <input type="text" ref={this.myRef} />
//                 <h2>当前求和为{this.state.count}</h2>
//                 <button onClick={() => { this.add() }}>点我+1</button>
//                 <button onClick={() => { this.unmount() }}>卸载组件</button>
//                 <button onClick={() => { this.show() }}>点击展示inp内容</button>
//             </div>
//         )
//     }
// }

function Demo() {
    const [count, setCount] = React.useState(0)
    const [name, setName] = React.useState('tom')
    const myRef = React.useRef()
    React.useEffect(() => {
        console.log('@');
        let timer = setInterval(() => {
            setCount((count) => count + 1)
        }, 1000)
        return () => {//相当于卸载组件WillUnmount组件
            clearInterval(timer)
        }
    }, [])

    function show() {
        alert(myRef.current.value)
    }
    function add() {//加的回调
        console.log('你点击加号');
        // setCount(count + 1 )//第一种方式
        setCount((count) => { return count + 1 })
    }


    function changename() {//加的回调
        console.log('你点击加号');
        // setCount(count + 1 )//第一种方式
        setName('jack')
    }

    function unmount() {//卸载组件的回调
        console.log('卸载组件');
        root.unmount()
        // setCount(count + 1 )// 第一种方式
    }

    return (
        <div>
            <input type="text" ref={myRef} name="" id="" />
            <h2>当前求和为:{count}</h2>
            <h2>名字是:{name}</h2>
            <button onClick={() => { add() }}>点我+1</button>
            <button onClick={() => { changename() }}>改变名称</button>
            <button onClick={() => { unmount() }}>卸载组件+1</button>
            <button onClick={() => { show() }}>点击展示</button>
        </div>
    )
}

export default Demo
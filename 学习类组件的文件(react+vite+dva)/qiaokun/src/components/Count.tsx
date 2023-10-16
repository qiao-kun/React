import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'

interface Props {

}
interface State {
    count: number
}
export default class Count extends Component<Props, State> {
    constructor(props: Props) {
        console.log('Count-constructor')
        super(props)
        this.state = { count: 0 }
    }
    add = () => {
        //获取原状态
        const { count } = this.state
        this.setState({ count: count + 1 })
    }
    forceupdate = () => {
        this.forceUpdate()//强制更新即使 关闭了更新阀门也可以更新
    }
    unmount = () => {
        //卸载组件按钮的回调
        const root = createRoot(document.getElementById('count') as HTMLElement)
        root.unmount()
    }
    componentWillMount(): void {//组件将要挂载的钩子
        console.log('Count-componentWillMount');
    }
    componentDidMount(): void {//组件挂载完毕的钩子
        console.log('Count-componentDidMount');
    }
    shouldComponentUpdate(nextProps: Readonly<{}>, nextState: Readonly<{}>, nextContext: any): boolean {
        console.log('Count-shouldComponentUpdate')
        return true //阀门开关 如果关闭次之后的生命周期关闭线路
    }
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        console.log('componentDidUpdate')
    }
    componentWillUnmount(): void {//
        console.log('Count-componentWillUnmount');
    }
    render() {
        console.log('Count-render');
        const { count } = this.state
        return (
            <div id='count'>
                <h2>当前求和为:{count}</h2>
                <button onClick={this.add}>点击+1</button>
                <button onClick={this.unmount}>卸载组件</button>
                <button onClick={this.forceupdate}>强制更新</button>
            </div>
        )
    }
}

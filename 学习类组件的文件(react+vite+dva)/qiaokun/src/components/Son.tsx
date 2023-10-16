import React, { Component } from 'react'
import { createRoot } from 'react-dom/client'
interface Props {
    carName: string
}


export default class Son extends Component<Props> {

    componentDidMount(): void {
        console.log('子组件挂载', '初始的props不算')
    }

    UNSAFE_componentWillReceiveProps(nextProps: Readonly<Props>, nextContext: any): void {
        console.log('子组件接受到props', 'UNSAFE_componentWillReceiveProps')
    }
    shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<{}>, nextContext: any): boolean {
        console.log('shouldComponentUpdate是否允许更新---更新之前')
        return true
    }
    UNSAFE_componentWillUpdate(nextProps: Readonly<Props>, nextState: Readonly<{}>, nextContext: any): void {
        console.log('UNSAFE_componentWillUpdate组件更新之后');
    }

    componentWillUnmount(): void {
        console.log('componentWillUnmount')
    }
    handleDestroy = () => {
        const root = createRoot(document.getElementById("son") as HTMLElement)
        root.unmount()
    }

    render() {
        // const { carName } = this.props
        console.log('render渲染了')
        return (
            <div id='son' style={{ background: "green", width: "200px" }}>
                儿子组件B
                <p>我收到的车是:{this.props.carName}</p>
                <button onClick={this.handleDestroy}>卸载组件</button>
            </div>
        )
    }
}

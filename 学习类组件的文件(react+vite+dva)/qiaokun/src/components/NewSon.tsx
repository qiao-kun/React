import React, { Component } from 'react'
interface Props {
    count: number
}
interface State {

}
export default class NewSon extends Component<Props, State> {
    state = {
        count: 0
    }
    constructor(props: Props) {
        super(props)
    }
    componentDidUpdate(prevProps: Readonly<Props>, prevState: Readonly<State>, snapshot?: any): void {
        console.log(prevProps, prevState, snapshot, 'updatas')
    }

    static getDerivedStateFromProps(props: Props, state: State) {//派生状态
        console.log('getDerivedStateFromProps', props, state)
        return null
    }

    getSnapshotBeforeUpdate(prevProps: Readonly<Props>, prevState: Readonly<{}>) {

        console.log('getSnapshotBeforeUpdate在更新之前')
        return prevState
    }


    render() {
        return (
            <div>
                新的子组件{this.state.count}
                <button onClick={() => { this.setState({ count: this.state.count + 1 }) }}>点击加1</button>
            </div>
        )
    }
}

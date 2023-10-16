import React, { Component } from 'react'

export default class News extends Component {
    state = { newArr: [] }
    componentDidMount(): void {
        setInterval(() => {
            const { newArr } = this.state
            console.log(newArr, 'newArr')
            const news = '新闻' + (newArr.length + 1)
            this.setState({ newArr: [news, ...newArr] })
        }, 1000)
        console.log(this.state.newArr)
    }
    getSnapshotBeforeUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>) {
        // this.refs.list.scrollHeight
        console.log((this.refs.list as HTMLElement).scrollHeight)
        return (this.refs.list as HTMLElement).scrollHeight
    }
    componentDidUpdate(prevProps: Readonly<{}>, prevState: Readonly<{}>, snapshot?: any): void {
        console.log(snapshot, 'height');
        (this.refs.list as HTMLElement).scrollTop += (this.refs.list as HTMLElement).scrollHeight - snapshot
    }
    render() {
        return (
            <div className='list' ref="list">
                {this.state.newArr.map((n) => {
                    return <div key={n}>{n}</div>
                })}
            </div>
        )
    }
}

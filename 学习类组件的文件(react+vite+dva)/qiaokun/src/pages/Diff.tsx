import { Component } from 'react'

interface State {
    date: Date
}
 
export default class Diff extends Component<{}, State> {
    timer: number | null = null

    state: State = {
        date: new Date()
    }

    componentDidMount(): void {
        this.timer = setInterval(() => {
            this.setState({ date: new Date() })
        }, 1000)
    }

    componentWillUnmount(): void {
        if (this.timer) {
            clearInterval(this.timer)
        }
    }

    render() {
        return (
            <div>
                <h1>Hello World</h1>
                <input type="text" />
                <p></p>
                <span>现在是: {this.state.date.toLocaleString()}</span>
            </div>
        )
    }
}

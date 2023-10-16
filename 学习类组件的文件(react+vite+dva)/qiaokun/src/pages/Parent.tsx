import { Component } from 'react'
import Son from '../components/Son'

interface State {
    carName: string
}

export default class Parent extends Component<State> {
    state = { carName: "奔驰" }
    changeCar = () => {
        this.setState({ carName: "奥特曼" })
    }

    render() {
        return (
            <div id='parent'>
                <div style={{ background: "skyblue" }}>父亲组件A
                    <Son carName={this.state.carName} ></Son>
                </div>
                <button onClick={this.changeCar}>换车</button>
            </div>
        )
    }
}

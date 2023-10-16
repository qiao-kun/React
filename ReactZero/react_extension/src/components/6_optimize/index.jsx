import React, { PureComponent } from 'react'

export default class Parent extends PureComponent {
    state = { carName: '奔驰c36' }


    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps, nextState);
        return !this.state.carName === nextState.carName
    }
    changeCar = () => {
        this.setState({ carName: "迈巴赫" })

    }
    render() {
        const { carName } = this.state
        return (
            <div>
                <h3>我是Parent组件</h3>
                <span>我的车的名字是:{carName}</span>
                <button onClick={this.changeCar}>点我换车</button>
                <Child carName={carName}></Child>
            </div>
        )
    }
}
class Child extends PureComponent {
    shouldComponentUpdate(nextProps, nextState) {
        return !this.props.carName === nextProps.carName
    }
    render() {
        console.log('Child-ernder');
        return (
            <div className='child'>
                <h3>我是Child组件</h3>
                <span>我接到的车是:{this.props.carName}</span>
            </div>
        )
    }
}